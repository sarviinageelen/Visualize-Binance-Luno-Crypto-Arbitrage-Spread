Overview
--------

This script creates a custom menu in Google Sheets with an option to "Get Data" that calls crypto APIs and logs the data in different sheets in the same spreadsheet. The script calls 3 different APIs and extracts timestamp, bid, and price data. The data is then logged in separate sheets with the names "Timestamp", "Luno", and "Binance".

Usage
-----

1.  Open the Google Sheet where you want to add the custom menu
2.  Go to "Tools" -> "Script Editor"
3.  Replace the existing code with the provided script
4.  Save the script and give it a name
5.  Refresh the sheet, you should now see a new menu "🚀__Crypto Arbitrage" with option "🟢__Get Data"
6.  Click on the option to call the APIs and extract the data
7.  Check the "Timestamp", "Luno" and "Binance" sheets to view the logged data

Note
----

The script has been written to extract data for a specific pair ("XRPMYR") and symbol ("binancexrpusdt") in the APIs. You may need to update the script to extract data for a different pair or symbol.
