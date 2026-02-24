# Setting up Google Sheets as Contact Form Backend

Follow these steps to create a free backend that saves your contact form submissions to a Google Sheet.

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like "Portfolio Contact Form Responses".
3. Rename the first tab (at the bottom) to `Sheet1` (it should be the default).
4. In the first row, add these headers:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `Message`

## Step 2: Add the Script
1. In the Google Sheet, click on **Extensions** > **Apps Script**.
2. Delete any code in the `Code.gs` file and paste the following code:

```javascript
const SHEET_NAME = "Sheet1";
const SECRET_KEY = "mySuperSecret123"; // change this

const doPost = (e = {}) => {
  try {
    const { postData: { contents } = {} } = e;
    const data = JSON.parse(contents);

    if (data.secret !== SECRET_KEY) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "error", message: "Unauthorized" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const { name, email, message } = data;

    if (!name || !email || !message) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "error", message: "Missing fields" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    sheet.appendRow([new Date(), name, email, message]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: "Server error" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
};
```

3. Click the **Save** icon (floppy disk) or press `Cmd + S`. Name the project "Contact Form Backend".

## Step 3: Deploy as Web App
1. Click the blue **Deploy** button > **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the details:
   - **Description**: Contact Form API
   - **Execute as**: `Me` (your email)
   - **Who has access**: `Anyone` (This is critical!)
4. Click **Deploy**.
5. You will likely be asked to **Authorize access**.
   - Click "Authorize access".
   - Choose your Google account.
   - If you see "Google hasn't verified this app", click **Advanced** > **Go to Contact Form Backend (unsafe)**.
   - Click **Allow**.

## Step 4: Get Key
1. Copy the **Web App URL** provided after deployment (starts with `https://script.google.com/macros/s/...`).
2. Paste this URL into your `src/sections/Contact.tsx` file where it says `YOUR_GOOGLE_SCRIPT_URL`.
