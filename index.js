const express = require("express");
const cors = require("cors");
const router = require("./Router/Router");
const { default: mongoose } = require("mongoose");
const app = express();
const env = require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(router);
//connecting to mongodb
const url = "mongodb+srv://ompshahane:Jtp9tWGV2kSvGh2H@blackcoffer.zkagjqc.mongodb.net/?retryWrites=true&w=majority&appName=blackCoffer";
mongoose.connect(url).then(()=>{
  console.log("We are successfully connected to MongoDb")
})
app.listen(5000, "localhost", () => {
  console.log("running");
});
