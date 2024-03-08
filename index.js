const express = require("express");
const cors = require("cors");
const router = require("./Router/Router");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(router);
//connecting to mongodb
mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(()=>{
  console.log("We are successfully connected to MongoDb")
})
app.listen(5000, "localhost", () => {
  console.log("running");
});
