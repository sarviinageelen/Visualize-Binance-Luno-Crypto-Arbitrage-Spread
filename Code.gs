function callBinance() {
  
  // Call the Numbers API for random math fact
  var response = UrlFetchApp.fetch("https://coinograph.io/ticker/?symbol=binance:xrpusdt");
  
  // Parse the JSON reply
  var json = response.getContentText();
  var data = JSON.parse(json);
  var data = data["bid"]
  
  Logger.log(data);

  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(sheet.getLastRow() + 1,1).setValue([data]);
  
}