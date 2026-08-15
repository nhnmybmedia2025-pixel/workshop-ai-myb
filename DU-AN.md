# Hồ sơ dự án — Workshop Video AI MYB

**File hệ thống.** Đọc hết trước khi sửa `index.html` / `uu-dai.html` / `js/app.js` / DNS. Đổi giá, STK, ngày, domain thì cập nhật **file này cùng lúc** rồi commit + deploy.

Cập nhật lần cuối: **15/08/2026** (sửa câu từ: ý tưởng, tone voice, tên 4 món).

---

## 1. Mục đích

Phễu 2 trang, học **xương** LeaderUp (lead → ưu đãi 1 lần), **không** copy giao diện LadiPage / vàng kim / mỏ neo 110 triệu.

| Trang | File | Việc |
|---|---|---|
| 1 | `index.html` | Workshop **miễn phí** → giữ chỗ Zoom |
| 2 | `uu-dai.html` | OTO ngay sau form — 4 món, 50 suất **295.000đ**, VIP **999.000đ** |

Không bán workshop. Bán bộ máy dùng **tối nay**, rồi ngày 26/08 chỉnh trên case thật.

---

## 2. Sự kiện & người

| Hạng mục | Giá trị đúng |
|---|---|
| Tên | Làm thế nào để 1 ý tưởng thành 10+ Video AI? |
| Ngày | Thứ 4 · **26/08/2026** · 19:30–22:00 (+07) |
| Hình thức | Zoom |
| Diễn giả | Mr. Nguyễn Hải Nam — CEO / Founder MYB Media Agency |
| Hotline / Zalo | **0868.931.691** (`zalo.me/0868931691`) |
| Email | hainam1211.myb@gmail.com |
| Địa chỉ | TT3-20 KĐT Đại Kim, Định Công, Hà Nội |
| Bio | [nguyenhainam.net](https://nguyenhainam.net/vi/) |
| Agency | [mybmedia.vn](https://mybmedia.vn) |
| Landing cũ (Netlify, ads có thể đang trỏ) | [workshop-ai.mybmedia.vn](https://workshop-ai.mybmedia.vn/) |
| Landing phễu này | **[workshop-video-ai.mybmedia.vn](https://workshop-video-ai.mybmedia.vn/)** |

**Không** dùng hotline 0986.76.35.34. Ưu tiên số trên nguyenhainam.net.

Tệp: chủ shop / SME, trưởng nhóm marketing (team 1–3), freelancer / creator.

Giọng: tiếng Việt rõ. Cấm jargon “cửa bán / không trần / chết ở like”, cấm pretentious, cấm English lẫn (`everywhere`, `tonight`, `check mail`, `talking-head`, `brand voice`).

---

## 3. URL & triển khai

### Link chạy ads / Zalo

```
https://workshop-video-ai.mybmedia.vn/?nguon=zalo
```

Canonical: `https://workshop-video-ai.mybmedia.vn/`  
OTO: `https://workshop-video-ai.mybmedia.vn/uu-dai.html`

### Hạ tầng

| Việc | Giá trị |
|---|---|
| Local | `python3 -m http.server 4173` → http://127.0.0.1:4173/?nguon=zalo |
| GitHub | https://github.com/nhnmybmedia2025-pixel/workshop-ai-myb · nhánh `main` |
| User GitHub | `nhnmybmedia2025-pixel` |
| Cloudflare Pages | project `workshop-ai-myb` |
| Live uy tín | **https://workshop-video-ai.mybmedia.vn/** |
| Live Pages | https://workshop-ai-myb.pages.dev/ |
| Account CF | nhn.mybmedia2025@gmail.com |
| Account id | `19e74f45bda4ddd31d35e47286127126` |
| Zone | `mybmedia.vn` · id `71d684070e6155fa22135685da5d5ff7` |
| NS | `brady.ns.cloudflare.com` / `veronica.ns.cloudflare.com` |
| `wrangler.toml` | `name = "workshop-ai-myb"` · `pages_build_output_dir = "."` |
| Deploy | `npx wrangler pages deploy . --project-name=workshop-ai-myb` |
| DNS landing này | CNAME `workshop-video-ai` → `workshop-ai-myb.pages.dev` · **Proxied** |
| Apex `mybmedia.vn` | A `150.95.109.12` · **DNS only** · Next.js + Plesk/Passenger |
| Wildcard | `*.mybmedia.vn` A `150.95.109.12` (CNAME cụ thể thắng wildcard) |

### Domain — đã quyết

| URL | Trạng thái | Ghi chú |
|---|---|---|
| `workshop-video-ai.mybmedia.vn` | **Live HTTPS 200** | Domain uy tín của phễu này. Đúng chính tả `workshop`. |
| `mybmedia.vn/workshop-video-ai` | **Không dùng** | Apex Next.js 404. Path cần rewrite trên Plesk. **Đừng** bật proxy apex — rủi ro trang công ty. |
| `workshop-ai.mybmedia.vn` | Giữ nguyên | Landing cũ Netlify (`myb-workshop.netlify.app`). Ads cũ có thể đang trỏ. |
| `wokshop-video-ai` | Không tạo | Typo — kém uy tín. |

Wrangler OAuth **không** ghi được DNS (403). Thêm/sửa CNAME qua dashboard:  
https://dash.cloudflare.com/19e74f45bda4ddd31d35e47286127126/mybmedia.vn/dns/records

`.gitignore`: `.DS_Store`, `.wrangler/`, `node_modules/`, `*.log`, `.wrangler.toml` (file cũ lasen-web — **đừng** commit).

---

## 4. Thương hiệu & UI

Logo `assets/logo-myb.png` (wordmark navy + xanh). Favicon chữ **M** vuông (`favicon-32/48/192`, `apple-touch-icon`).

```css
--navy:  #0d3558;
--green: #3db54a;
--ink:   #14324a;
--red:   #d92d20;   /* giá gạch, worth, chữ miễn phí */
```

`--gold` **alias sang xanh** (đã bỏ vàng LeaderUp). Font: **Be Vietnam Pro**.

Layout: cột mobile-first ~430px, nở 720 / 960. Sticky bar trắng + logo.

Chữ **miễn phí**: class `.blink` — màu đỏ, `font-size: 1.55em`, nhấp nháy. `prefers-reduced-motion` thì gạch chân, không nháy.

Ảnh Nam từ `~/Downloads/ảnh nam 2` (đã copy `assets/`). Persona: `who-sme.jpg`, `who-manager.jpg`, `who-creator.jpg`. Case crop 3:2, `object-fit: cover; object-position: top`. Desktop `.case-card` `align-items: start`.

**Cấm:** `workshop-banner.jpg` (chữ đè chữ), vàng kim, copy ATD, mỏ neo giả.

---

## 5. Bản đồ file

```
index.html                 Đăng ký workshop + case + form
uu-dai.html                OTO 4 món + checkout + STK
css/styles.css             Token, blink, case-card link
js/app.js                  Form, countdown, stock, viết hoa, packs giá
tools/video-hang-loat.html Tool 1 ý → 10 kịch bản
tools/image-magic.html     Nén / đổi định dạng / resize (local)
qua-tang/                  Ebook + SOP + bonus (tải sau chốt)
assets/                    Logo, Nam, who, case, gift
wrangler.toml
README.md                  Chạy local (ngắn) — trỏ sang file này
DU-AN.md                   File hệ thống (đây)
```

Phễu JS: `[data-register]` → `localStorage.myb_lead` → `uu-dai.html?name=&email=&phone=&role=&nguon=`. Checkout `[data-checkout]` → `myb_order`. `?nguon=zalo` lưu `myb_nguon`.

---

## 6. Giá — bậc thang (chi phí thay thế)

Não đọc 4 món cùng một số = catalog giả. Não đọc 8 triệu → 295k = “khóa đang sale”, không sốc.

**Quy tắc:** mỗi món = tiền shop phải trả *tháng này* nếu không có bộ. Không mỏ neo 50–110 triệu. Không hạ gần 295k.

| # | Món | Vai | Giá lẻ | Chi phí thay thế |
|---|---|---|---|---|
| 1 | MYB Video Hàng Loạt | Chủ lực · tool | **11.970.000đ** | 10 clip/tuần × 300k × 4 tuần |
| 2 | Ebook 100 mega prompt | Kho | **4.970.000đ** | 100 cảnh × 49.700đ |
| 3 | Ebook xây kênh AI | Quy trình | **2.490.000đ** | 1 khóa vận hành 3 nền tảng |
| 4 | MyB Image Magic | Utility | **970.000đ** | ~1 năm tool ảnh shop (≥ 3× gói 295k) |
| — | Cộng 4 món | | **20.400.000đ** | ~69 lần giá OTO |
| 5 | Buổi 1:1 (chỉ VIP) | Upsell | **4.970.000đ** | Nửa ngày CEO/agency · VIP lẻ **25.370.000đ** |

Tỉ lệ giữ khi chỉnh: tool ≈ 2,4× kho ≈ 2× ebook ≈ 2,6× utility.

| Gói | Giá bán | Gạch | Giảm | SKU |
|---|---|---|---|---|
| 50 suất đầu | **295.000đ** | 20.400.000đ | −20.105.000đ | `OTO-295-50SUAT` |
| VIP kèm 1:1 | **999.000đ** | 25.370.000đ | −24.371.000đ | `OTO-999-VIP-1-1` |

Scarcity: 50 suất, `localStorage.myb_taken` mặc định **37** → còn 13. OTO countdown 20 phút (`sessionStorage.myb_oto_deadline`). Sự kiện: `2026-08-26T19:30:00+07:00`.

**Đổi giá:** sửa `uu-dai.html` (từng món + stack + gạch) **và** `packs` trong `js/app.js`. Cộng lại cho khớp. Rồi mục 6 file này.

---

## 7. Chuyển khoản (thật)

```
Ngân hàng TMCP Á Châu (ACB)
Số tài khoản: 55593838
Chủ tài khoản: Công ty TNHH Dịch vụ Truyền thông và Quảng cáo MYB
Nội dung: Số điện thoại + VIDEOAI
```

Không Techcombank. Viết hoa: **Công ty** (không “Công Ty”), **Dịch vụ / Truyền thông / Quảng cáo**, **và** thường, **TNHH / MYB** hoa.

---

## 8. Form & viết hoa (`js/app.js`)

- Họ tên: viết hoa từng tiếng (`nguyễn hải nam` → Nguyễn Hải Nam). `blur` + `paste` + `submit`.
- Công ty: hợp ngữ. `COMPANY_COMPOUNDS` + `NAME_KEEP_UPPER` / `NAME_KEEP_LOWER`.
- Toast ảo: mảng `NAMES`.
- Form **chưa** nối CRM / Sheet / email vé Zoom — chỉ `localStorage`.

---

## 9. Lợi ích buổi học (#01–#06)

Không nhảy #1 #3 #6 #9 (mẹo “giả còn nhiều”). Số = thứ tự buổi live.

| Số | Việc | Ý |
|---|---|---|
| #01 Ý tưởng | 1 ý tưởng bán hàng → nhiều video | Ra nội dung |
| #02 Tone voice | Bộ prompt cố định tone voice + hình ảnh thương hiệu | Không lệch nhận diện |
| #03 Phân kênh | TikTok lấy khách, Facebook nuôi, Zalo chốt | Không đăng một clip lên mọi nơi |
| #04 Lời kêu gọi | Bình luận / nhắn tin / đặt hàng | Có chỗ đi tiếp |
| #05 Chốt đơn | Kịch bản tin nhắn bằng AI | Team nhỏ vẫn chạy |
| #06 Bộ quà 50 suất | Tool sản xuất video không giới hạn + ebook xây kênh bằng AI + bộ 100+ prompt + tool MyB Image Magic | Việc sau khi giữ chỗ |

Bỏ “…và còn nhiều hơn thế nữa”.

---

## 10. Case study — quy tắc chứng

Cả thẻ là `<a class="case-card">`, `target="_blank"` `rel="noopener noreferrer"`. Chỉ **Nàng Dâu** được khoe view lớn. Kênh MYB nói thẳng số nhỏ.

| Case | Ảnh | Link | Được nói |
|---|---|---|---|
| Chuyện tình nàng Dâu | `case-nang-dau-tt.jpg` | https://www.tiktok.com/@daudamdo | TikTok 127.800–156.500 xem, 3.314 follow, 36.200 thích. FB 70.600–85.200 xem, 4.100 follow |
| Avatar MYB × SP | `case-avatar-myb.jpg` | https://www.facebook.com/MyB.Media.Agency/reels/ | Khuôn shop; Reels **50–126** xem |
| AI template MYB | `case-myb-brand.jpg` | https://www.facebook.com/mybmedia.agencydichvutruyenthongvaquangcao/reels/ | 32.000 follow; clip **51–234** xem |
| AI mỗi ngày · Mr Nam | `case-nam-ai.jpg` | https://www.tiktok.com/@aimoingaybymrnam | Mặt nhìn máy; dạy khuôn, không khoe view |

Dạy: khóa nhân vật / khóa nhận diện / nhân bản góc.

---

## 11. Bộ quà thật

Tool HTML local — không SaaS, không trừ credit.

| Món | File |
|---|---|
| Video Hàng Loạt | `tools/video-hang-loat.html` |
| Image Magic | `tools/image-magic.html` |
| Ebook kênh | `qua-tang/ebook-xay-kenh-tu-dong-ai.md` |
| 100 mega prompt | `qua-tang/ebook-100-mega-prompt.md` |
| SOP / khuôn / ads / Zalo / 14 ngày | `qua-tang/00` … `08` + `bonus-a/b/c` |

FAQ: tool không bắt mua Veo/Kling. Ebook prompt dùng khi **đã có** tài khoản model.

Cover: `gift-tool.jpg`, `gift-prompt.jpg`, `gift-channel.jpg`, `gift-ads.jpg`.

---

## 12. Việc còn mở

- [ ] Nối form → Google Sheet / CRM / mail vé Zoom thật
- [ ] Link group Zalo sự kiện (đang `zalo.me/0868931691`)
- [ ] Path `mybmedia.vn/workshop-video-ai` — chỉ khi có quyền sửa Next.js/Plesk
- [x] Domain uy tín `workshop-video-ai.mybmedia.vn` (15/08/2026)
- [ ] Commit + deploy mỗi lần đổi giá / STK / ngày / domain

---

## 13. Quy tắc khi chỉnh tiếp

1. Đọc file này trước. Học xương LeaderUp, không copy look LadiPage.
2. Navy + xanh logo. Không vàng.
3. Không san bằng giá 4 món. Không bịa view MYB.
4. Tool chỉ chạy local. Không exploit / malware.
5. Chính tả Việt: “Thứ 4”, “Họ và tên”; CTA không la hét từng chữ.
6. Case: crop `object-position: top`; cả thẻ là link kênh thật.
7. Lợi ích: #01–#06 theo pipeline, không nhảy số.
8. Đổi giá/STK/ngày/domain → cập nhật mục tương ứng **trong file này**, rồi:

```bash
git add -A && git commit -m "mô tả ngắn" && git push origin main
npx wrangler pages deploy . --project-name=workshop-ai-myb
```

---

## 14. Lịch sử quyết định

| Quyết định | Lý do |
|---|---|
| 2 trang tĩnh, không LadiPage | Nam tự host, Cloudflare Pages |
| Bỏ SOP-only → 4 món tool + ebook | OTO cần “chạy được tối nay” |
| Tool miễn phí; ebook prompt Veo/Kling/Grok | Tool không credit; kho prompt là IP |
| 387k → 399k → **295k / VIP 999k** | 50 suất + 1:1 |
| Bỏ 4 × 3.99tr rồi 8.22tr | Não đọc giả / không sốc |
| Bậc 11.97 / 4.97 / 2.49 / 0.97 = **20.4tr** | Chi phí thay thế tháng này |
| STK ACB 55593838 công ty MYB | Hóa đơn / uy tín |
| Case 4 kênh, chỉ Nàng Dâu khoe view | Số MYB nhỏ nói thẳng |
| Lợi ích #01–#06 | Số nhảy #1 #3 #6 không khớp buổi học |
| Viết hoa tên trên form | Lead sạch |
| Domain `workshop-video-ai.mybmedia.vn` | pages.dev kém uy tín; path apex 404; không đụng landing Netlify cũ |

Mẫu xương phễu (không copy look):  
https://sukien.leaderup.vn/dao-tao-tac-dong-kpi/?nguon=zalo  
https://sukien.leaderup.vn/uu-dai-duy-nhat-1-lan

---

## 15. Commit gần nhất (tham chiếu)

| Hash | Việc |
|---|---|
| `11597ff` | Gắn domain + canonical |
| `9b80fed` | Bậc giá thay thế 20.4tr |
| `8696650` | Link 4 case, lợi ích 01–06, miễn phí đỏ |
| `1d44eb3` | STK ACB, viết hoa tên, DU-AN lần đầu |
