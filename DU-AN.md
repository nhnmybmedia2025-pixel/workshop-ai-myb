# Hồ sơ dự án — Workshop Video AI MYB

File tổng để lần sau chỉnh landing **không phải lần lại**. Đọc file này trước khi sửa `index.html` / `uu-dai.html` / `js/app.js`.

Cập nhật lần cuối: **14/08/2026** (domain https://workshop-video-ai.mybmedia.vn).

---

## 1. Mục đích

Phễu 2 trang, học **xương** LeaderUp (lead → ưu đãi 1 lần), **không** copy giao diện LadiPage / vàng kim / mỏ neo 110 triệu.

- Trang 1 (`index.html`): workshop **miễn phí** → giữ chỗ Zoom.
- Trang 2 (`uu-dai.html`): OTO ngay sau form — bộ 4 món, 50 suất **295.000đ**, VIP **999.000đ**.

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
| Workshop gốc (tham chiếu) | [workshop-ai.mybmedia.vn](https://workshop-ai.mybmedia.vn/) |

**Không** dùng hotline 0986.76.35.34. Ưu tiên số trên nguyenhainam.net.

Tệp: chủ shop / SME, trưởng nhóm marketing (team 1–3), freelancer / creator. Giọng: tiếng Việt rõ, không jargon “cửa bán / không trần / chết ở like”, không pretentious.

---

## 3. URL & triển khai

| Việc | Giá trị |
|---|---|
| Local | `python3 -m http.server 4173` → http://127.0.0.1:4173/?nguon=zalo |
| GitHub | https://github.com/nhnmybmedia2025-pixel/workshop-ai-myb · nhánh `main` |
| Cloudflare Pages | project `workshop-ai-myb` |
| Live (uy tín) | **https://workshop-video-ai.mybmedia.vn/** |
| Live (Pages) | https://workshop-ai-myb.pages.dev/ |
| Account CF | nhn.mybmedia2025@gmail.com · account id `19e74f45bda4ddd31d35e47286127126` |
| Zone | `mybmedia.vn` · id `71d684070e6155fa22135685da5d5ff7` |
| `wrangler.toml` | `name = "workshop-ai-myb"` · `pages_build_output_dir = "."` |
| Deploy | `npx wrangler pages deploy . --project-name=workshop-ai-myb` |
| DNS | CNAME `workshop-video-ai` → `workshop-ai-myb.pages.dev` · **Proxied** |
| Không dùng | `mybmedia.vn/workshop-video-ai` — apex là Next.js/Plesk DNS-only, 404. Path này cần rewrite trên site chính, **đừng** bật proxy apex (rủi ro trang công ty). |
| Giữ nguyên | `workshop-ai.mybmedia.vn` — landing cũ trên Netlify (`myb-workshop.netlify.app`), ads có thể đang trỏ. |

`.gitignore`: `.DS_Store`, `.wrangler/`, `node_modules/`, `*.log`, `.wrangler.toml` (file cũ lasen-web — **đừng** commit).

---

## 4. Thương hiệu & UI

Logo chính thức `assets/logo-myb.png` (wordmark navy + xanh). Favicon cắt chữ **M** vuông (`favicon-32/48/192`, `apple-touch-icon`).

```css
--navy:  #0d3558;
--green: #3db54a;
--ink:   #14324a;
--red:   #d92d20;   /* giá gạch / worth */
```

`--gold` đang **alias sang xanh** (đã bỏ vàng LeaderUp). Font: **Be Vietnam Pro**.

Layout: cột mobile-first ~430px, nở ở 720 / 960. Sticky bar trắng + logo. Chữ **miễn phí** có class `.blink`.

Ảnh Nam lấy từ `~/Downloads/ảnh nam 2` (đã copy vào `assets/`). Ảnh persona “Ai nên tham gia”: `who-sme.jpg`, `who-manager.jpg`, `who-creator.jpg`. Case crop 3:2, `object-fit: cover; object-position: top`. Desktop `.case-card` `align-items: start` (không stretch).

**Cấm:** banner `workshop-banner.jpg` (chữ đè chữ), vàng kim, copy ATD, mỏ neo giả.

---

## 5. Bản đồ file

```
index.html              Trang đăng ký workshop
uu-dai.html             OTO 4 món + checkout
css/styles.css          Token + layout
js/app.js               Form, countdown, stock, viết hoa tên
tools/video-hang-loat.html
tools/image-magic.html  Tool chạy local, không upload server
qua-tang/               Ebook + SOP + bonus (link download sau khi chốt)
assets/                 Logo, Nam, who, case, gift covers
wrangler.toml
README.md               Chạy local (ngắn)
DU-AN.md                File này
```

Phễu JS: form `[data-register]` → `localStorage.myb_lead` → `uu-dai.html?name=&email=&phone=&role=&nguon=`. Checkout `[data-checkout]` → `myb_order`. Nguồn ads: `?nguon=zalo` lưu `myb_nguon`.

---

## 6. Giá — bậc thang (chi phí thay thế, không giá file)

Não đọc **4 món cùng một số** là catalog giả. Não đọc **8 triệu → 295k** là “khóa học đang sale”, không sốc.

**Quy tắc định giá:** mỗi món = thứ shop phải trả *tháng này* nếu không có bộ. Không mỏ neo 50–110 triệu (giả). Không hạ xuống gần giá OTO (mất sốc).

| # | Món | Vai | Giá lẻ | Chi phí thay thế |
|---|---|---|---|---|
| 1 | MYB Video Hàng Loạt | Chủ lực · tool | **11.970.000đ** | 10 clip/tuần × 300k × 4 tuần = 1 tháng freelancer kịch bản |
| 2 | Ebook 100 mega prompt | Kho | **4.970.000đ** | 100 cảnh × 49.700đ — rẻ hơn 1 buổi quay cinematic |
| 3 | Ebook xây kênh AI | Quy trình | **2.490.000đ** | 1 khóa vận hành 3 nền tảng (không phải 1 buổi tư vấn) |
| 4 | MyB Image Magic | Utility | **970.000đ** | ~1 năm tool xử lý ảnh shop; vẫn gấp 3 lần gói 295k |
| — | Cộng 4 món | | **20.400.000đ** | ~69 lần giá OTO |
| 5 | Buổi 1:1 (chỉ VIP) | Upsell | **4.970.000đ** | Nửa ngày CEO/agency ngồi case · tổng VIP lẻ **25.370.000đ** |

Tỉ lệ bậc (giữ khi chỉnh): tool ≈ 2,4× kho prompt ≈ 2× ebook ≈ 2,6× utility. Utility vẫn ≥ 3× giá 295k.

Gói bán:

| Gói | Giá | Giảm so với lẻ | SKU |
|---|---|---|---|
| 50 suất đầu | **295.000đ** | −20.105.000đ (gạch 20.400.000) | `OTO-295-50SUAT` |
| VIP kèm 1:1 | **999.000đ** | −24.371.000đ (gạch 25.370.000) | `OTO-999-VIP-1-1` |

Scarcity: 50 suất, `localStorage.myb_taken` mặc định **37** → còn 13. Hết suất / tắt tab = mất giá. Countdown OTO 20 phút (`sessionStorage.myb_oto_deadline`). Countdown sự kiện: `2026-08-26T19:30:00+07:00`.

**Khi đổi giá:** sửa đồng thời `uu-dai.html` (từng món + stack + gạch) **và** object `packs` trong `js/app.js`. Cộng lại cho khớp.

---

## 7. Chuyển khoản (thật)

```
Ngân hàng TMCP Á Châu (ACB)
Số tài khoản: 55593838
Chủ tài khoản: Công ty TNHH Dịch vụ Truyền thông và Quảng cáo MYB
Nội dung: Số điện thoại + VIDEOAI
```

Không còn Techcombank. Viết hoa đúng: **Công ty** (không “Công Ty”), **Dịch vụ / Truyền thông / Quảng cáo**, **và** thường, **TNHH / MYB** hoa.

---

## 8. Form & viết hoa (`js/app.js`)

- Họ tên: viết hoa **từng tiếng** (`nguyễn hải nam` → Nguyễn Hải Nam). Gắn `blur` + `paste` + `submit`.
- Công ty: hợp ngữ (`Công ty TNHH Dịch vụ Truyền thông và Quảng cáo MYB`). Từ điển `COMPANY_COMPOUNDS` + `NAME_KEEP_UPPER` / `NAME_KEEP_LOWER`.
- Toast ảo: danh sách `NAMES` (đã viết hoa sẵn).
- Form **chưa** nối CRM / Sheet / email vé Zoom — chỉ localStorage. Việc còn lại trước khi chạy ads.

---

## 9. Case study — quy tắc chứng

Cả thẻ case là link (`<a class="case-card">`), mở tab mới. Chỉ **Nàng Dâu** được khoe view lớn. Kênh MYB nói thẳng số nhỏ — không bịa viral.

| Case | Ảnh | Link | Được nói |
|---|---|---|---|
| Chuyện tình nàng Dâu | `case-nang-dau-tt.jpg` | [tiktok.com/@daudamdo](https://www.tiktok.com/@daudamdo) | TikTok 127.800–156.500 xem, 3.314 follow, 36.200 thích. FB 70.600–85.200 xem, 4.100 follow |
| Avatar MYB × SP | `case-avatar-myb.jpg` | [facebook.com/MyB.Media.Agency/reels](https://www.facebook.com/MyB.Media.Agency/reels/) | Khuôn shop; Reels **50–126** xem — kênh thử nghiệm |
| AI template MYB | `case-myb-brand.jpg` | [facebook.com/mybmedia.agency…/reels](https://www.facebook.com/mybmedia.agencydichvutruyenthongvaquangcao/reels/) | 32.000 follow; clip **51–234** xem — kênh chuyên gia |
| AI mỗi ngày · Mr Nam | `case-nam-ai.jpg` | [tiktok.com/@aimoingaybymrnam](https://www.tiktok.com/@aimoingaybymrnam) | Series mặt nhìn máy; dùng để dạy khuôn, không khoe view |

Workshop dạy: khóa nhân vật / khóa nhận diện / nhân bản góc. Không lấy case từ slide lạ.

**Mục “Bạn sẽ nhận được gì”:** đánh số **#01–#06 theo thứ tự buổi live** (ý tưởng → nhận diện → phân kênh → lời kêu gọi → chốt đơn → bộ quà). Không nhảy #1 #3 #6 #9 — đó là mẹo “giả còn nhiều”, không khớp nội dung.

---

## 10. Bộ quà thật (không brochure)

4 món săn + file kèm. Tool là HTML local, **không** SaaS, **không** trừ credit.

| Món | File |
|---|---|
| Tool video hàng loạt | `tools/video-hang-loat.html` |
| Image Magic | `tools/image-magic.html` |
| Ebook kênh | `qua-tang/ebook-xay-kenh-tu-dong-ai.md` |
| 100 mega prompt | `qua-tang/ebook-100-mega-prompt.md` |
| SOP / khuôn / ads / Zalo / 14 ngày | `qua-tang/00` … `08` + `bonus-a/b/c` |

FAQ: tool **không bắt** mua Veo/Kling. Ebook prompt dùng **khi đã có** tài khoản model. Image Magic xử lý trên trình duyệt.

Ảnh cover quà: `gift-tool.jpg`, `gift-prompt.jpg`, `gift-channel.jpg`, `gift-ads.jpg`.

---

## 11. Việc còn mở

- [ ] Nối form → Google Sheet / CRM / mail vé Zoom thật
- [ ] Link group Zalo sự kiện (đang trỏ Zalo cá nhân)
- [ ] Domain `workshop-ai.mybmedia.vn` (khi Nam yêu cầu)
- [ ] Commit + deploy mỗi lần đổi giá / STK / ngày sự kiện

---

## 12. Quy tắc khi chỉnh tiếp

1. Học cấu trúc LeaderUp, **không** copy look LadiPage.
2. Giữ navy + xanh logo. Không vàng.
3. Không san bằng giá 4 món. Không bịa view MYB.
4. Không viết exploit / malware. Tool chỉ chạy local.
5. Chính tả Việt: tiêu đề section hoa chữ đầu; CTA không la hét từng chữ; “Thứ 4”; “Họ và tên”.
6. Ảnh case: crop mặt hàng / thumbnail, `object-position: top`.
7. Sửa xong: cập nhật **mục 6–7** file này nếu đổi giá hoặc STK, rồi commit + `wrangler pages deploy`.

---

## 13. Lịch sử quyết định (rút gọn)

| Quyết định | Lý do |
|---|---|
| 2 trang tĩnh, không LadiPage | Nam tự host, Cloudflare Pages |
| Bỏ SOP-only → 4 món tool + ebook | OTO cần “chạy được tối nay” |
| Có lúc cấm model trả phí, rồi **mở lại** Veo/Kling/Grok trong ebook prompt | Tool thì miễn phí; kho prompt là IP |
| 387k → 399k → **295k / VIP 999k** | 50 suất + 1:1 |
| Bỏ 4 × 3.990.000 rồi 8.22tr | Não đọc giả / không sốc; xếp 11.97 / 4.97 / 2.49 / 0.97 = 20.4tr |
| STK ACB công ty, không TK cá nhân | Hóa đơn / uy tín |
| Case Nàng Dâu + số MYB thật | Chỉ 1 bằng chứng view lớn |
| Viết hoa tên trên form | Lead sạch, đúng chính tả |

Mẫu tham chiếu (chỉ xương phễu):  
https://sukien.leaderup.vn/dao-tao-tac-dong-kpi/?nguon=zalo  
https://sukien.leaderup.vn/uu-dai-duy-nhat-1-lan
