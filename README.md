# Google Drive and Confluence Connector by ServiceRocket

##### Development locally

Note: This addon was created using ACE. Auto registration is not used however as this keeps changing the url used and you will constantly need to update the link in google credentials which is a pain.

Before starting:
1. npm install or yarn!
1. Run ngrok in terminal    `ngrok http 3000`
1. Take the url and put it in your `.env` file. 
1. Update the developer/api key and client key in the .env file


To start

1. `npm run start`
1. Install the addon in your confluence connect instance via the url.


-------------

To test using nightwatch.js

1. Have a running instance with the addon installed and a default space created.
1. Update the variables for the test in .env file
2. `npm test`