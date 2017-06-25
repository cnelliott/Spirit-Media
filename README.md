# Spirit-Media
Media app/website for churches and global religions. Created a Facebook Messenger App

#Spirittest.js
This file is where the brains of the Facebook Messenger APP lives.
The first section is the function app.post uses the FB Messenger pageID to connect to the app's messenger APP ID.
Quick Start up guide in Facebook for Developers was used to create messenger.

#app.use
Calls the JSON package with dependcies as follows:
    body-parser": "^1.17.2",
    "bundle": "^0.2.3",
    "express": "^4.15.3",
    "request": "^2.81.0",
    "webtask-tools": "^3.2.0"
    "wt-cli": "^6.1.1"
The "wt-cli is Webtask which generates a url and uploads node-modules automaticly using 
the terminal to deploy the app using npm run deploy. This code also has the access token key.

#Webtask Access token and Messenger bot API
In line #93 function callSendAPI(messageData, secrets) is how the messenger uses data to operate and talk to 
the subscribed app and goes to lines #114-120 first. In this section the access token is 
verified using the auth0 from Webtask and Messenger Bot.
