// --------------------------------------------------------------------------------------------------
//
// Crypto Daily Stock Data in Google Sheets
//
// --------------------------------------------------------------------------------------------------
 
// Custom menu.
// function onOpen() {
//   var ui = SpreadsheetApp.getUi();
//   ui.createMenu('eToro')
//       .addItem('Get Stock Data','calleToroAPI')     
//       .addItem('Clear Sheet','clearSheet')
//       .addToUi();
// }


// Function to call the eToro API.
function calleToroAPI() {

  //Get the active Spreadsheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  //Find the sheet we want.
  var sheet=ss.getSheetByName("Temp");
  //Activate that sheet.
  sheet.activate() 
  
  // Call the iTunes API
  var response = UrlFetchApp.fetch("https://ajax.luno.com/ajax/1/udf/history?symbol=XRPMYR&resolution=5&from=1611729324&to=1612170384");
  
  // Parse the JSON reply
  var json = response.getContentText();
  var data = JSON.parse(json);
  
  // var results = data["Candles"][0]["Candles"];
  var results = data;

  var output = []

  results.forEach(function(elem) {
    output.push([elem["t"]]);
  });

  // clear any previous content
  var range = sheet.getRange("A2:E");
  range.clearContent();
  
  // paste in the values
  sheet.getRange(sheet.getLastRow() + 1, 1, output.length, output[0].length).setValues(output);


}


// Function to clear the sheet.
function clearSheet() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Temp");
  var range = sheet.getRange("A2:Z");
  range.clearContent();

}