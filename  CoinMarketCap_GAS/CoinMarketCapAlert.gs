function callCoinMarketCapAlert() {
  
    // Fetch current percentage difference
    var percentageDifference = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Alert").getRange("J2").getValue(); 
    var averageDifference = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Alert").getRange("K2").getValue(); 
    
    // Compare percentageDifference and averageDifference
    if (percentageDifference >= averageDifference){
      // Set the email address
      var emailAddress = "xcess96@gmail.com";
    
      // Send Alert Email.
      var message = 'The price difference is ' + percentageDifference;
      var subject = 'CoinMarketCap Alert';
      MailApp.sendEmail(emailAddress, subject, message);
      }
  
    Logger.log(percentageDifference);
    Logger.log(averageDifference);  
  }