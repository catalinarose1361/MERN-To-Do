const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/notesDB")

app.use("/", require("./routes/noteRoute"))

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})