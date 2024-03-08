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
const url = process.env.REACT_APP_MONGODB_CONNECTION_URL;
mongoose.connect(url).then(()=>{
  console.log("We are successfully connected to MongoDb")
})
app.listen(3000, () => {
  console.log("running");
});
