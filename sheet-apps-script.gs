function doGet(e) {
  return handle_(e ? e.parameter : {});
}

function doPost(e) {
  var p = {};
  try {
    if (e && e.postData && e.postData.contents) {
      p = JSON.parse(e.postData.contents);
    }
  } catch (err) {}
  if (e && e.parameter) {
    Object.keys(e.parameter).forEach(function (k) {
      if (p[k] == null || p[k] === "") p[k] = e.parameter[k];
    });
  }
  return handle_(p);
}

function handle_(p) {
  p = p || {};
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("DangKy") || ss.getSheets()[0];
  sheet.setName("DangKy");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Thoi gian", "Loai", "Danh xung", "Ho ten", "Email", "SDT",
      "Chuc danh", "Cong ty", "Tinh thanh", "Goi", "So tien", "Nguon"
    ]);
    sheet.getRange(1, 1, 1, 12).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([
    new Date(),
    p.loai || p.type || "",
    p.title || "",
    p.name || "",
    p.email || "",
    p.phone || "",
    p.role || "",
    p.company || "",
    p.city || "",
    p.pack || "",
    p.amount || "",
    p.nguon || ""
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
