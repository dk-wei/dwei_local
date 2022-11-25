function myFunction() {
  let ss = SpreadsheetApp.getActiveSpreadsheet(); 
  let cs = ss.getActiveSheet();   // get active spreadsheet
  let raw_data_sheet = ss.getSheetByName("raw_data");     // chose the tab
  let lastRow = raw_data_sheet.getLastRow();



  let dataRange = raw_data_sheet.getRange(1,2,lastRow);   // select area you want to proess
  let data = dataRange.getValues();

  //Logger.log(data)

  let targetRange = raw_data_sheet.getRange(1,3,lastRow)
  targetRange.setValues(data) 

  raw_data_sheet.insertColumnAfter(2)
  //let col2_header = raw_data_sheet.getRange(1, 3)
  //col2_header.setValue('Coppied Data')

  let col3_data = raw_data_sheet.getRange(1,3,lastRow)
  col3_data.setValues(data)
  


  
}
