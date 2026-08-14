# 01 · Hệ prompt Video AI — giữ brand, ra clip đăng được

Tài liệu vận hành · Workshop Nhân bản ý tưởng · MYB Media  
Khung: Nguyễn Hải Nam

Video AI thua không vì thiếu tool. Thua vì prompt rời: mỗi người một giọng, mỗi clip một mặt, mỗi ngày một ý. Tài liệu này là **hệ** — điền 1 lần, dùng cả tháng.

---

## 0. Việc 12 phút trước khi mở tool

Không đạt 3 dòng dưới đây thì chưa được gen.

1. **Insight:** khách đang tin điều gì sai / đang làm cách cũ?  
2. **Offer:** xem xong họ làm đúng 1 việc gì (inbox / comment từ khóa / click)?  
3. **Proof:** có 1 bằng chứng nói được trong 3 giây (số, case, trước–sau)?

Mẫu 1 câu lõi (dán lên đầu mọi prompt):

> Nhiều [ai] đang [hành vi sai] vì tưởng [niềm tin sai].  
> Sự thật: [cơ chế 1 câu]. Làm [bước nhỏ] để [kết quả 7–30 ngày].

---

## 1. Brand Voice Card (điền 1 lần)

Copy khối này ra Notion / Lark. Mọi prompt chỗ `{BRAND}` dán nguyên card.

```
THƯƠNG HIỆU: ________
NGÀNH / SẢN PHẨM CHỦ: ________
KHÁCH: [ai · độ tuổi · 1 nỗi đau cụ thể, không “tất cả mọi người”]
LỜI HỨA 30 NGÀY: ________
GIỌNG: thẳng / ấm / chuyên gia / vui  (chọn 1)
TỪ HAY DÙNG: ________
CẤM: rẻ nhất · cam kết 100% · giàu sau 7 ngày · chê đối thủ · tiếng Anh đệm
BẰNG CHỨNG CÓ SẴN: [số liệu / review / case]
VISUAL LOCK:
  - Mặt / nhân vật: 3 đặc điểm không đổi 14 ngày
  - Áo + màu: ________
  - Nền + ánh sáng: ________
  - Logo: 1 vị trí (góc nào)
CTA MẶC ĐỊNH: inbox ____ / comment ____ / link ____
KPI CLIP: giữ 3s / inbox / đơn  (chọn 1)
```

Quy tắc: 14 ngày không đổi 3 thuộc tính visual đầu. Đó là brand. Không phải “để AI sáng tạo”.

---

## 2. Thư viện prompt — copy và thay ngoặc

### 2.1 Đạo diễn nội dung (1 insight → 8 góc)

```
Bạn là đạo diễn short-form cho SME Việt Nam.
{BRAND}
Câu lõi: {câu 1 dòng ở mục 0}

Nhiệm vụ: 8 phiên bản. Mỗi phiên bản ĐỔI GÓC NHÌN, không chỉ đổi chữ.

Với mỗi góc trả về đúng khung:
- Tên góc
- Hook 8–12 từ (nói trong 1.5s)
- 4 cảnh × 2–3 giây: [HÌNH] | [THOẠI] | [TEXT ON SCREEN ≤ 6 từ]
- CTA 1 câu = 1 việc
- Vì sao góc này khác 7 góc kia (1 dòng)

Cấm: mở “Hôm nay mình chia sẻ”, intro công ty, 2 CTA, claim tuyệt đối.
```

### 2.2 Kịch bản 20–28 giây (đủ đăng)

```
{BRAND}
Viết 1 kịch bản Video AI 20–28 giây.

Nhịp bắt buộc:
0–3s   Hook (mâu thuẫn / số / cấm kỵ)
3–8s   Nỗi đau = 1 tình huống cụ thể
8–18s  Cơ chế: sai → đúng → proof
18–24s Offer + CTA

Ràng buộc hình: 1 nhân vật, 1 bối cảnh, 1 trang phục.
Cấm: chữ bay, zoom giật, watermark AI, đổi loc giữa clip.

Output 2 cột: HÌNH | THOẠI + TEXT
```

### 2.3 Nhân bản đa nền tảng (cùng thông điệp, khác vai trò kênh)

```
{BRAND}
Kịch bản gốc: {dán}

Giữ CÙNG câu lõi. Đổi vai trò kênh:
1) TikTok 21s — cắt 2s, thoại tự nhiên, CTA comment
2) Reels 25s — hook mạnh hơn, CTA inbox
3) Facebook 45s — mở chậm 1 nhịp + proof
4) Shorts 20s — end screen + link
5) Ảnh cover — 1 câu + 1 số
6) Post chữ 80–110 chữ — 1 CTA
7) Zalo OA 3 tin — móc từ video, không bán lại từ đầu
8) Caption ads — 3 hook primary text

Mỗi bản: 1 dòng “điểm khác”. Không clone 100% chữ.
```

### 2.4 Khóa visual (tránh mỗi clip một mặt)

```
Tạo prompt ảnh/video. Identity khóa:
Mặt: {3 đặc điểm}
Áo: {màu + kiểu}
Ánh sáng: soft key 45°, nền {màu brand}
Tỷ lệ 9:16, headroom 15%
Cảnh: {1 hành động}
Negative: extra fingers, warped face, text rác, logo lạ, watermark, đổi tuổi
```

### 2.5 Voice + nhịp dựng

```
Lời thoại đọc 20 giây, tối đa 52 từ tiếng Việt.
Giọng {nam 30–40 / nữ 25–35}, vừa, nhấn: {3 từ khóa}.
1 ý / 1 câu. Ngắt 0.4s trước CTA. Không sáo.
```

### 2.6 QA trước khi đăng

```
Soát script theo 6 ô:
1. Tắt tiếng còn dừng không?
2. 1 insight hay 3 ý?
3. Visual khớp lock?
4. Có câu cấm / claim quá đà?
5. CTA = 1 việc?
6. Có phụ đề?

Trả PASS hoặc SỬA + câu thay. Script: {dán}
```

### 2.7 Prompt ads hook (từ clip organic)

```
{BRAND}
Clip organic thắng: {hook + 3s view / CTR}
Viết 6 hook ads, mỗi hook ≤ 12 từ.
3 hook nỗi đau, 2 hook proof, 1 hook offer.
Không lặp cấu trúc. Gắn 1 CTA: {đăng ký / inbox}.
```

### 2.8 Prompt “giết clip” (khi không ra inbox)

```
Clip này không ra inbox. Số liệu: {3s view, hold, CTR, inbox}.
Chỉ ra 1 nguyên nhân chính trong 4:
A thiếu insight  B hook yếu  C lệch tệp  D CTA mù
Cho 1 bản sửa, không viết lại cả kịch bản.
```

---

## 3. 20 góc nhân bản — xoay 1 insight / tuần

1. Sai lầm hay mắc  
2. Con số giật mình  
3. Ngày thường của khách  
4. Trước / sau  
5. Bí mật nghề  
6. Checklist 3 bước  
7. Myth vs fact  
8. “Đừng làm X nếu…”  
9. Case 1 khách  
10. Hậu trường  
11. So 2 cách  
12. Mẹo 10 giây  
13. Câu hỏi mở  
14. Phản biện comment  
15. Unbox quy trình  
16. POV nhân viên  
17. POV khách  
18. POV sếp  
19. Tóm tắt 1 trang  
20. Offer thẳng + hạn

Lịch chuẩn: **1 insight × 7 góc × 2 ads hook**. Không 7 insight × 1 góc.

---

## 4. Lỗi prompt hay gặp

| Làm thế này | Hệ quả | Sửa |
|---|---|---|
| “Viết video hay về sản phẩm” | Generic, không đăng được | Nhét card + câu lõi |
| Đổi mặt / áo mỗi ngày | Brand không đọng | Visual lock 14 ngày |
| 4 CTA / clip | Không ai làm gì | 1 việc |
| Prompt mới mỗi lần | Team không lặp được | 8 prompt ở mục 2 |

Xong card + 1 kịch bản mục 2.2 thì mở `02-sop-10-phut.md`. Không mở thêm file.
