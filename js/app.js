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

  const SHEET_WEBAPP =
    "https://script.google.com/macros/s/AKfycbzhAQyczYClva_YcGRQ6SfZjzI0PyY1BRBE7Ap5JMg8yu9pT6GvMqFZbGRgvWf9h3d_Ag/exec";

  function sendToSheet(payload) {
    const qs = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => {
      if (v != null && String(v).trim() !== "") qs.set(k, String(v));
    });
    const url = `${SHEET_WEBAPP}?${qs.toString()}`;
    try {
      if (navigator.sendBeacon) navigator.sendBeacon(url);
      fetch(url, { method: "GET", mode: "no-cors", keepalive: true }).catch(() => {});
    } catch (_) {}
  }

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

  const NAME_KEEP_UPPER = new Set([
    "tnhh", "tmcp", "mtv", "cp", "jsc", "myb", "ceo", "cmo", "ai", "sme", "vip", "oto",
  ]);
  const NAME_KEEP_LOWER = new Set([
    "và", "của", "cho", "tại", "trên", "với", "hay", "hoặc", "trong", "về", "theo",
  ]);
  const COMPANY_COMPOUNDS = {
    "công ty": "Công ty",
    "dịch vụ": "Dịch vụ",
    "truyền thông": "Truyền thông",
    "quảng cáo": "Quảng cáo",
    "thương mại": "Thương mại",
    "cổ phần": "Cổ phần",
    "hữu hạn": "hữu hạn",
    "trách nhiệm": "Trách nhiệm",
    "đầu tư": "Đầu tư",
    "phát triển": "Phát triển",
    "giáo dục": "Giáo dục",
    "đào tạo": "Đào tạo",
    "tư vấn": "Tư vấn",
    "sản xuất": "Sản xuất",
    "kinh doanh": "Kinh doanh",
    "bất động sản": "Bất động sản",
    "công nghệ": "Công nghệ",
    "thông tin": "Thông tin",
    "giải trí": "Giải trí",
    "xuất nhập khẩu": "Xuất nhập khẩu",
    "xuất khẩu": "Xuất khẩu",
    "nhập khẩu": "Nhập khẩu",
    "thực phẩm": "Thực phẩm",
    "xây dựng": "Xây dựng",
    "du lịch": "Du lịch",
    "vận tải": "Vận tải",
  };

  function capSyllable(part) {
    if (!part) return part;
    const lower = part.toLocaleLowerCase("vi-VN");
    return lower.charAt(0).toLocaleUpperCase("vi-VN") + lower.slice(1);
  }

  function vietCompanyCase(raw) {
    const words = String(raw || "").trim().replace(/\s+/g, " ").split(" ");
    if (!words[0]) return "";
    const lower = words.map((w) => w.toLocaleLowerCase("vi-VN"));
    const out = [];
    let i = 0;
    while (i < lower.length) {
      let hit = "";
      let span = 0;
      for (let n = 3; n >= 2; n -= 1) {
        const slice = lower.slice(i, i + n).join(" ");
        if (COMPANY_COMPOUNDS[slice]) {
          hit = COMPANY_COMPOUNDS[slice];
          span = n;
          break;
        }
      }
      if (hit) {
        out.push(hit);
        i += span;
        continue;
      }
      const w = lower[i];
      if (NAME_KEEP_UPPER.has(w)) out.push(w.toLocaleUpperCase("vi-VN"));
      else if (i > 0 && NAME_KEEP_LOWER.has(w)) out.push(w);
      else out.push(capSyllable(w));
      i += 1;
    }
    return out.join(" ");
  }

  /** Họ tên: viết hoa từng tiếng. Công ty: Công ty TNHH Dịch vụ…, giữ MYB, "và" viết thường. */
  function vietTitleCase(raw, isPerson) {
    const text = String(raw || "").trim().replace(/\s+/g, " ");
    if (!text) return "";
    if (!isPerson) return vietCompanyCase(text);
    return text
      .split(" ")
      .map((word) => {
        const bits = word.split(/([-./])/);
        return bits
          .map((bit) => {
            if (!bit || /[-./]/.test(bit)) return bit;
            const lower = bit.toLocaleLowerCase("vi-VN");
            if (NAME_KEEP_UPPER.has(lower)) return lower.toLocaleUpperCase("vi-VN");
            return capSyllable(bit);
          })
          .join("");
      })
      .join(" ");
  }

  function applyFieldCase(input) {
    if (!input || !input.value) return;
    const person = input.name === "name";
    const company = input.name === "company";
    if (!person && !company) return;
    input.value = vietTitleCase(input.value, person);
  }

  function bindAutoCase(root = document) {
    root.querySelectorAll('input[name="name"], input[name="company"]').forEach((el) => {
      el.addEventListener("blur", () => applyFieldCase(el));
      el.addEventListener("paste", () => setTimeout(() => applyFieldCase(el), 0));
    });
  }

  function fillFromLead(root = document) {
    let lead = {};
    try {
      lead = JSON.parse(localStorage.getItem("myb_lead") || "{}");
    } catch {
      lead = {};
    }
    const map = {
      name: vietTitleCase(params.get("name") || lead.name || "", true),
      email: params.get("email") || lead.email || "",
      phone: params.get("phone") || lead.phone || "",
      role: params.get("role") || lead.role || "",
      company: vietTitleCase(params.get("company") || lead.company || "", false),
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
      form.querySelectorAll('input[name="name"], input[name="company"]').forEach(applyFieldCase);
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
      sendToSheet({
        loai: "dang-ky",
        title: data.title || "",
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role || "",
        company: data.company || "",
        nguon,
      });
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
      295: {
        name: "Gói 50 suất đầu",
        amount: 295000,
        label: "295.000đ",
        off: "−20.105.000đ",
        cut: "20.400.000đ",
        sku: "OTO-295-50SUAT",
      },
      999: {
        name: "Gói VIP kèm 1:1",
        amount: 999000,
        label: "999.000đ",
        off: "−24.371.000đ",
        cut: "25.370.000đ",
        sku: "OTO-999-VIP-1-1",
      },
    };
    const paint = (key) => {
      const p = packs[key] || packs[295];
      form.querySelectorAll("[data-pay-amount]").forEach((el) => {
        el.textContent = p.label;
      });
      const nameEl = form.querySelector("[data-sku-name]");
      const priceEl = form.querySelector("[data-sku-price]");
      const offEl = form.querySelector("[data-pay-off]");
      const cutEl = form.querySelector("[data-sku-cut]");
      if (nameEl) nameEl.textContent = p.name;
      if (priceEl) priceEl.textContent = p.label;
      if (offEl) offEl.textContent = p.off;
      if (cutEl) cutEl.textContent = p.cut;
    };
    form.querySelectorAll("input[name=pack]").forEach((input) => {
      input.addEventListener("change", () => paint(input.value));
    });
    paint(form.querySelector("input[name=pack]:checked")?.value || "295");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.querySelectorAll('input[name="name"], input[name="company"]').forEach(applyFieldCase);
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
      sendToSheet({
        loai: "don",
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || "",
        pack: p.name,
        amount: p.label,
        nguon,
      });
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
  bindAutoCase();
  bindRegister();
  bindCheckout();
  renderEventCountdown();
  setInterval(renderEventCountdown, 1000);
  sessionCountdown();
  toastLoop();
})();
