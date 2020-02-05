const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

const logger = require("morgan")

const PORT = process.env.PORT || 1000

const app = express();

app.use(logger("dev"))

require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app, path)
require("./routes/apiRoutes")(app);
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParse: true});

app.listen(PORT, () =>{
    console.log("Listening on PORT " + PORT)
})