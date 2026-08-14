(() => {
  const EVENT_AT = new Date("2026-08-26T19:30:00+07:00");
  const NAMES = [
    "Nguyễn Thị Mai",
    "Bùi Xuân Luyến",
    "Thanh Thảo",
    "Hoàng Minh",
    "Trần Hữu Phát",
    "Lê Thị Hạnh",
    "Phạm Quốc Huy",
    "Đỗ Mỹ Linh",
    "Vũ Đức Anh",
    "Ngô Phương Chi",
  ];

  const params = new URLSearchParams(location.search);
  const nguon = params.get("nguon") || localStorage.getItem("myb_nguon") || "direct";
  if (params.get("nguon")) localStorage.setItem("myb_nguon", nguon);

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function eventRemain() {
    const ms = EVENT_AT - Date.now();
    if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(ms / 86400000),
      h: Math.floor((ms % 86400000) / 3600000),
      m: Math.floor((ms % 3600000) / 60000),
      s: Math.floor((ms % 60000) / 1000),
    };
  }

  function renderEventCountdown() {
    const el = document.querySelector("[data-event-count]");
    if (!el) return;
    const t = eventRemain();
    el.textContent = `${t.d} ngày ${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`;
  }

  function sessionCountdown() {
    const els = document.querySelectorAll("[data-oto-count]");
    if (!els.length) return;
    const KEY = "myb_oto_deadline";
    let end = Number(sessionStorage.getItem(KEY) || 0);
    if (!end || end < Date.now()) {
      end = Date.now() + 20 * 60 * 1000;
      sessionStorage.setItem(KEY, String(end));
    }
    const tick = () => {
      const ms = Math.max(0, end - Date.now());
      const m = Math.floor(ms / 60000);
      const s = Math.floor((ms % 60000) / 1000);
      const label = `${pad(m)} : ${pad(s)}`;
      els.forEach((el) => {
        el.textContent = label;
      });
    };
    tick();
    setInterval(tick, 1000);
  }

  function toastLoop() {
    const stack = document.querySelector(".toast-stack");
    if (!stack) return;
    const fire = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const mins = 2 + Math.floor(Math.random() * 40);
      const node = document.createElement("div");
      node.className = "toast";
      node.innerHTML = `<div class="toast-ava">${name.charAt(0)}</div>
        <div><b>${name}</b><span>Đã đăng ký · ${mins} phút trước</span></div>`;
      stack.appendChild(node);
      setTimeout(() => node.remove(), 5000);
    };
    setTimeout(fire, 1800);
    setInterval(fire, 7000);
  }

  function fillFromLead(root = document) {
    let lead = {};
    try {
      lead = JSON.parse(localStorage.getItem("myb_lead") || "{}");
    } catch {
      lead = {};
    }
    const map = {
      name: params.get("name") || lead.name || "",
      email: params.get("email") || lead.email || "",
      phone: params.get("phone") || lead.phone || "",
      role: params.get("role") || lead.role || "",
      company: params.get("company") || lead.company || "",
      title: params.get("title") || lead.title || "",
    };
    Object.entries(map).forEach(([k, v]) => {
      const input = root.querySelector(`[name="${k}"]`);
      if (input && v) input.value = v;
    });
    return map;
  }

  function bindRegister() {
    const form = document.querySelector("[data-register]");
    if (!form) return;
    const err = form.querySelector(".err");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (!data.name?.trim() || !data.phone?.trim() || !data.email?.trim()) {
        if (err) {
          err.textContent = "Điền họ tên, email và số điện thoại để nhận vé Zoom.";
          err.classList.add("show");
        }
        return;
      }
      data.nguon = nguon;
      data.at = new Date().toISOString();
      localStorage.setItem("myb_lead", JSON.stringify(data));
      const q = new URLSearchParams({
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role || "",
        nguon,
      });
      location.href = `uu-dai.html?${q.toString()}`;
    });
  }

  function bindCheckout() {
    const form = document.querySelector("[data-checkout]");
    if (!form) return;
    const err = form.querySelector(".err");
    const success = document.querySelector("[data-success]");
    const packs = {
      295: { name: "Gói 50 suất đầu", amount: 295000, label: "295.000đ", off: "−15.665.000đ", sku: "OTO-295-50SUAT" },
      999: { name: "Gói VIP kèm 1:1", amount: 999000, label: "999.000đ", off: "−14.961.000đ", sku: "OTO-999-VIP-1-1" },
    };
    const paint = (key) => {
      const p = packs[key] || packs[295];
      form.querySelectorAll("[data-pay-amount]").forEach((el) => {
        el.textContent = p.label;
      });
      const nameEl = form.querySelector("[data-sku-name]");
      const priceEl = form.querySelector("[data-sku-price]");
      const offEl = form.querySelector("[data-pay-off]");
      if (nameEl) nameEl.textContent = p.name;
      if (priceEl) priceEl.textContent = p.label;
      if (offEl) offEl.textContent = p.off;
    };
    form.querySelectorAll("input[name=pack]").forEach((input) => {
      input.addEventListener("change", () => paint(input.value));
    });
    paint(form.querySelector("input[name=pack]:checked")?.value || "295");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (!data.name?.trim() || !data.phone?.trim() || !data.email?.trim() || !data.city) {
        if (err) {
          err.textContent = "Điền họ tên, email, số điện thoại và tỉnh thành để giữ suất.";
          err.classList.add("show");
        }
        return;
      }
      const p = packs[data.pack] || packs[295];
      data.sku = p.sku;
      data.amount = p.amount;
      data.nguon = nguon;
      data.at = new Date().toISOString();
      localStorage.setItem("myb_order", JSON.stringify(data));
      const taken = Number(localStorage.getItem("myb_taken") || 37);
      localStorage.setItem("myb_taken", String(Math.min(49, taken + 1)));
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  const leftEl = document.querySelector("[data-left]");
  if (leftEl) {
    const taken = Number(localStorage.getItem("myb_taken") || 37);
    leftEl.textContent = String(Math.max(1, 50 - taken));
  }

  fillFromLead();
  bindRegister();
  bindCheckout();
  renderEventCountdown();
  setInterval(renderEventCountdown, 1000);
  sessionCountdown();
  toastLoop();
})();
