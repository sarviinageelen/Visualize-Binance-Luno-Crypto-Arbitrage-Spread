// custom menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('🚀__Crypto Arbitrage')
      .addItem('🟢__Get Data','callCoinMarketCapAPI')
      .addToUi();
}

// function to call crypto API
function callCoinMarketCapAPI() {

  //
  // Get Timestamp Data
  //

  // Call the API
  var response1 = UrlFetchApp.fetch("https://web-api.coinmarketcap.com/v1/exchange/market-pairs/latest?slug=binance&matched_symbol=XRP");
  
  // Parse the JSON reply
  var json1 = response1.getContentText();
  var data1 = JSON.parse(json1);
  var data1 = data1["status"]["timestamp"];
  
  Logger.log(data1);

  var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Timestamp");
  sheet1.getRange(sheet1.getLastRow() + 1,1).setValue([data1]);

  //
  // Get Luno Data
  //

  // Call the API
  var response2 = UrlFetchApp.fetch("https://web-api.coinmarketcap.com/v1/cryptocurrency/market-pairs/latest?symbol=XRP&matched_symbol=MYR");
  
  // Parse the JSON reply
  var json2 = response2.getContentText();
  var data2 = JSON.parse(json2);
  var data2 = data2["data"]["market_pairs"][0]["quote"]["exchange_reported"]["price"];
  
  Logger.log(data2);

  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Luno");
  sheet2.getRange(sheet2.getLastRow() + 1,1).setValue([data2]);

  //
  // Get Binance Data
  //
  
  // Call the API
  var response3 = UrlFetchApp.fetch("https://web-api.coinmarketcap.com/v1/exchange/market-pairs/latest?slug=binance&matched_symbol=XRP");
  
  // Parse the JSON reply
  var json3 = response3.getContentText();
  var data3 = JSON.parse(json3);
  var data3 = data3["data"]["market_pairs"][0]["quote"]["exchange_reported"]["price"];
  
  Logger.log(data3);

  var sheet3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Binance");
  sheet3.getRange(sheet3.getLastRow() + 1,1).setValue([data3]);

}