/**
 * Created by serrut on 24/06/16.
 */
const server = require('./server.js');

// Prepare the server
const port = (process.env.PORT || 5000);
const app = server.app();

// Start listening
app.listen(port);
console.log('App is running on port', port);