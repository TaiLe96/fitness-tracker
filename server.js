const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

const PORT = process.env.PORT || 5000

const app = express();

app.unsubscribe(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app, path)
require("./routes/apiRoutes")(app);
mongoose.connect(process.env.mongoose_uri || "mongodb://localhost/workout", {useNewUrlParse: true});



app.listen(PORT, () =>{
    console.log("Listening on PORT " + PORT)
})