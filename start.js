// THIS IS A START FILE FOR LOCAL DEVELOPMENT. 
// SINCE PERCYPHONE IS RUN IN VERCEL, THIS IS
// UNNECESSARY FOR PRODUCTION. -KZ

//call the index.js server file from ./api
const app = require('./api');
//call the PORT to listen in local development.
const port = process.env.PORT || 3000;
//run the server on a separate port to the normal port.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});