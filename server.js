const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

const logger = require("morgan")

const PORT = process.env.PORT || 1000

const app = express();

app.use(logger("dev"))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app, path)
require("./routes/apiRoutes")(app);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParse: true});



app.listen(PORT, () =>{
    console.log("Listening on PORT " + PORT)
})