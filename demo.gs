// function to call crypto API
function callDemoAPI() {

  // Call the API
  var response = UrlFetchApp.fetch("https://s1.bitcoinwisdom.io/trades?since=0&symbol=binancexrpusdt&nonce=1614251045");
  
  // Parse the JSON reply
  var json = response.getContentText();
  var data = JSON.parse(json);
  
  var results = data[29]["price"];

  Logger.log(results);

}