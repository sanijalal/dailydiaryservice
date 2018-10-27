import express = require("express"); // We need to import the express package.

// 1) This is how set up our express app. Initialise an express instance.
const app = express();
app.set("port", 1337); // 2) We need to setup which port to listen to. I use 1337.

// 3) This registers the get endpoint with the / uri. req is the request we receive. res is what we are sending.
app.get('/', (req, res) => {
    res.send("Hi")   // 4) Here we are sending the Hi message when we hit this endpoint.
})

// export our app
export default app; // 5) To let other files use this class, we need to export it.