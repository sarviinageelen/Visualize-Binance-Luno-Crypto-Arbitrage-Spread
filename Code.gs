function callBinance() {
  
  // Call the Numbers API for random math fact
  var response = UrlFetchApp.fetch("https://coinograph.io/ticker/?symbol=binance:xrpusdt");
  
  // Parse the JSON reply
  var json = response.getContentText();
  var data = JSON.parse(json);
  var data = data["bid"]
  
  //Logger.log(data);

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Binance");
  sheet.getRange(sheet.getLastRow() + 1,1).setValue([data]);
  
}

function callLuno() {
  
  // Call the Numbers API for random math fact
  var response = UrlFetchApp.fetch("https://ajax.luno.com/ajax/1/ticker?pair=XRPMYR");
  
  // Parse the JSON reply
  var json = response.getContentText();
  var data = JSON.parse(json);
  var data = data["bid"]
  
  //Logger.log(data);

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Luno");
  sheet.getRange(sheet.getLastRow() + 1,1).setValue([data]);
  
}