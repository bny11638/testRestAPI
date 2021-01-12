const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//parse requests of content-tyep: application/json
app.use(bodyParser.json());

//parse requess of content-type: application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//simple route
app.get("/", (req,res) => {
    res.json({ message: "Welcome to Brandon's test REST API"});
});

require("./app/routes/customer.routes.js")(app);

//setting por tand lsitening to requets
app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});
