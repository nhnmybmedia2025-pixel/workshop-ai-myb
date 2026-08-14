# 06 · Bán hàng tự động bằng AI — từ comment tới đơn

Video AI mở cửa. Bán hàng đóng cửa.  
Tự động ở đây = **kịch bản + AI soạn nháp + người duyệt câu chốt**. Không phải bot spam.

Dùng cho Zalo OA, inbox Facebook, comment TikTok. Team 1–3 người.

---

## 1. Phễu 5 nhịp (mọi lead đi hết, hoặc bị loại)

```
1. Móc     — nhận diện nguồn (comment KHÓA / inbox SOP / ads)
2. Lọc     — 3 câu: đang bán gì, đang mắc gì, cần trong 14 ngày?
3. Nháp    — AI viết theo block, người sửa 20%
4. Chốt    — 1 offer, 1 hạn, 1 cửa thanh toán / lịch
5. Nuôi    — nếu chưa mua: 1 value / 3 ngày, tối đa 4 touch
```

Lead không qua nhịp 2 trong 24h → đánh `rác` hoặc `nuôi`. Đừng để treo.

---

## 2. Cửa vào từ Video AI (bắt buộc gắn sẵn)

Mỗi clip chỉ 1 cửa:

| Cửa | Khi dùng | Từ khóa / CTA |
|---|---|---|
| Comment | Tài liệu nhẹ, lọc yếu | `KHÓA` `SOP` `THAM GIA` |
| Inbox | Tư vấn, giá, demo | `Inbox SOP` |
| Link | Form / landing đã có UTM | Bio, sticker |
| Zalo | Sau khi để SĐT / “inbox Zalo” | QR hoặc SĐT |

Poster ghi cửa vào cột `cua_ban` trong file `07`. Clip không có cửa = không tính marketing.

---

## 3. Kịch bản 7 tin (copy, thay ngoặc)

**Tin 0 — auto / nhanh (dưới 5 phút)**  
> Nhận `[KHÓA]`. Gửi checklist 6 ô đây ạ: [link / ảnh].  
> Bạn đang làm content cho ngành nào?

**Tin 1 — lọc**  
> Team mình khoảng mấy người?  
> Đang mắc nhất: hết ý / lệch brand / có view không đơn?

**Tin 2 — neo hệ**  
> Đa số shop gen 40 take rồi bỏ.  
> Cái thiếu là hệ: 1 insight / tuần + SOP 10 phút + cửa inbox.  
> Bạn đang lệch ô nào nhất?

**Tin 3 — proof nhỏ**  
> `[Case 1 câu, số thật]`. Không phải tool mới. Đổi thứ tự: nghĩ trước, gen sau.

**Tin 4 — offer**  
> Bộ tài liệu + mẫu dựng video đang 295.000đ (50 suất). VIP 999.000đ có buổi 1:1.  
> Dùng tonight, mang vào live 26/08 làm theo. Bạn lấy bản này hay cần xem mục lục trước?

**Tin 5 — xử lý “để tính sau”**  
> Để sau thường không mở lại.  
> File dùng được tối nay: Brand Card + SOP + 7 tin này.  
> Mình giữ giá 295.000đ cho 50 suất. Bạn chuyển `SĐT_VIDEOAI` giúp mình.

**Tin 6 — nuôi (nếu chưa mua)**  
> 1 value / 3 ngày: 1 hook, 1 ô QA, 1 lỗi prompt.  
> Touch 4 vẫn im → dừng. Không spam.

Cấm: 3 tin bán liên tiếp. Cấm: “anh/chị ơi ạ ạ ạ”. Cấm: hứa 100% đơn.

---

## 4. Prompt AI soạn inbox (người duyệt trước khi gửi)

```
Bạn là closer kênh Video AI cho SME Việt.
{BRAND}
Lead: {ngành, cửa vào, 2 câu họ đã nhắn}
Nhịp hiện tại: {0–6}
Viết 1 tin ≤ 45 từ, 1 câu hỏi, không emoji quá 1.
Giọng: thẳng, ấm, không salesy.
Cấm: cam kết doanh số, chê tool khác, kêu “duy nhất trên thị trường”.
```

Policy: AI không được gửi thẳng. Owner đọc 10 giây. Sai giọng → sửa rồi mới send.

---

## 5. CRM tối thiểu (Sheet, đừng mua tool tuần 1)

Cột: `ngay | ten | sdt | nguon | cua | nhip | insight_ho | offer | trang_thai | hen_ngay | ghi_chu`

Trạng thái: `moi | loc | dang_tu_van | chot | nuoi | rac`

Review cuối ngày 10 phút: bao nhiêu lead kẹt nhịp 1–2? Đó là lỗ doanh thu, không phải lỗ content.

---

## 6. Tự động hóa nhẹ (khi đã có 20 lead/tuần)

Thứ tự gắn, không làm ngược:

1. Form / comment → Sheet (Zapier / Make / Zalo OA form)  
2. Tin 0 tự gửi + tag nguồn  
3. Reminder Owner nếu 2 giờ chưa tin 1  
4. Tag `chot` → gửi STK / link  
5. Tag `nuoi` → sequence 4 touch

Chưa có 20 lead/tuần mà đi build chatbot 20 nhánh = trì hoãn bán.

---

## 7. KPI bán (cùng KPI content)

- Thời gian tin 0 < 15 phút (giờ hành chính)  
- % lead qua nhịp 2 ≥ 50%  
- % nhịp 2 → chốt: ghi số thật 2 tuần rồi mới đặt target  
- Lead ảo < 30%

Content thắng + bán gãy = bạn đang làm kênh giải trí.  
Sửa bán trước khi tăng ngân sách ads (`05`).
