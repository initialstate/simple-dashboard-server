# Simple Dashboard Server

This is a simple example a NodeJS server that hosts a local webpage containing an Initial State iframe embed of a Tiles dashboard.

Also included is an example of using an HTML form to submit data to a nodejs server app that then sends the data to a specific Initial State data bucket.

The reason this app uses an intermediary nodejs server instead of submitting directly to Initial State is to give the implementer control over the exposure of his/her Initial State Access Key.

## To Run

`$ npm install`

`$ INITIALSTATE_ACCESS_KEY=YOURKEY PORT=3000 npm start`

Then navigate to `localhost:3000/dashboard` or `<ip address>:3000/dashboard`
