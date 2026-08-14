# Landing workshop Video AI — Nguyễn Hải Nam / MYB

Hai trang theo xương phễu LeaderUp:

| File | Việc |
|---|---|
| `index.html` | Đăng ký workshop miễn phí 26/08/2026 |
| `uu-dai.html` | OTO · 50 suất **295.000đ** · VIP **999.000đ** |
| `qua-tang/` | 12 file: Video AI + hệ kênh + ads + bán hàng AI |

## Chạy local

```bash
cd "Landing page workshop"
python3 -m http.server 4173
```

Mở http://127.0.0.1:4173/?nguon=zalo (giao diện cột 430px, tối ưu Zalo).

Form trang 1 → lưu `localStorage` → redirect `uu-dai.html` kèm name/email/phone.

## Việc cần điền trước khi chạy ads

- STK Techcombank trong `uu-dai.html`
- Link group Zalo sự kiện (đang trỏ `zalo.me/0868931691`)
- Nối form với CRM / Google Sheet / email vé Zoom thật
