/*  Eurasia Bridge — Google Sheet receiver (Google Apps Script)
    Receives enquiries (and later cargo listings) from the website and appends
    them to a Google Sheet, so you get every customer request automatically.

    SETUP (about 5 minutes):
    1. Create a new Google Sheet (in your Google Workspace).
    2. Extensions → Apps Script. Delete the sample code, paste ALL of this.
    3. Click Deploy → New deployment → gear icon → Web app.
         - Description: Eurasia Bridge intake
         - Execute as: Me
         - Who has access: Anyone
       Click Deploy, authorise, and COPY the "Web app URL".
    4. Open site/app.js and paste that URL into:   const SHEET_ENDPOINT = "...";
    5. Re-upload the site (Netlify / GitHub Pages). Done — submissions now land in
       the sheet's "Enquiries" tab.
*/

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Enquiries') || ss.insertSheet('Enquiries');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp','Type','Company','Email','Origin','Destination','Cargo','Message','Lang']);
    }
    var d = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(), d.type || '', d.company || '', d.email || '',
      d.origin || '', d.destination || '', d.cargo || '', d.message || '', d.lang || ''
    ]);
    // Optional: also email yourself on every new enquiry — uncomment & set address:
    // MailApp.sendEmail('you@eurasia-bridge.kz', 'New website enquiry', JSON.stringify(d, null, 2));
    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Eurasia Bridge intake endpoint is live.');
}
