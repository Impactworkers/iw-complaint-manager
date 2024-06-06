---
layout: default
title: Slack Integration with Google Sheet
parent: How To Guides
permalink: how-to/slack-integration-google-sheet
---

{: .label .label-yellow }
Under Construction

# Slack Integration with Google Sheet

## This example is for custom google sheet for team facilitator rotation

1. **Create a Google Sheets Spreadsheet**:

- Open Google Sheets.

- Create a new spreadsheet or use an existing one.

- Name the spreadsheet appropriately, like "Weekly Slack Message Automation".

2. **Set up the Spreadsheet**:

- Create a sheet for your data. For example, you might have columns for "Facilitator Name" and "Schedule Date".

3. **Install Slack App in Google Workspace**:

- Go to the Google Workspace Marketplace.

- Search for "Slack".

- Install the Slack app for Google Workspace.

4. **Create a Slack App**:

- Go to the Slack API website (api.slack.com).

- Log in to your Slack workspace.

- Navigate to "Your Apps" and click on "Create New App".

- Give your app a name and choose the workspace you want to install it in.

5. **Configure Slack App**:

- Under "Add features and functionality", click on "Incoming Webhooks".

- Activate incoming webhooks for your Slack app.

- Follow the instructions to set up a new webhook for the channel where you want to send messages. Save the webhook URL.

6. **Write Google Apps Script**:

- In your Google Sheets spreadsheet, go to "Extensions" > "Apps Script".

- This will open the Google Apps Script editor.

- Write a script to send messages to Slack. Below is a sample script:

```js
function sendWeeklySlackMessage() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const lastRow = sheet.getLastRow();

  const data = sheet.getRange("A2:B" + lastRow).getValues(); // Assuming data starts from row 2 and columns   A and B

  

  // Shuffle the data array to randomize the facilitators

  shuffleArray(data);

  

  // Get the first two facilitators

  const facilitator1 = data[0][0];

  const facilitator2 = data[1][0];

  

  // Construct the message

  const message = "This week's facilitators are: " + facilitator1 + " and " + facilitator2;

  

  // Send the message to Slack

  sendSlackMessage(message);

}



function sendSlackMessage(message) {

  var slackWebhookUrl = 'YOUR_SLACK_WEBHOOK_URL';

  var payload = {

    "text": message

  };



  const options = {

    "method": "post",

    "payload": JSON.stringify(payload)

  };



  UrlFetchApp.fetch(slackWebhookUrl, options);

}



function shuffleArray(array) {

  for (let i = array.length - 1; i > 0; i--) {

    let j = Math.floor(Math.random() * (i + 1));

    let temp = array[i];

    array[i] = array[j];

    array[j] = temp;

  }

}
```

7. **Replace 'YOUR_SLACK_WEBHOOK_URL'** with the webhook URL you
obtained from Slack earlier.

8. **Set up Triggers**:

- In the Google Apps Script editor, go to "Edit" > "Current project's triggers".

- Click on "Add Trigger".

- Choose `sendWeeklySlackMessage` as the function to run.

- Choose a time-driven trigger to run the function every Friday at 9am.

9. **Save and Run**:

- Save your script.

- Run the `sendWeeklySlackMessage` function manually for the first time to make sure it's working correctly.

**With these steps, your Google Sheets should now automatically send weekly messages to Slack at 9 am every Friday, randomly selecting two facilitators from your spreadsheet data. Make sure to keep your spreadsheet updated with the facilitators' names.**

**Author:** *Fara Hughes*
