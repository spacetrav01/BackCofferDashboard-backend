const express = require("express");
const router = express.Router();
const fetchDataController = require("../Controller/fetchDataController");
module.exports = router.get("/fetch", fetchDataController);
module.exports = router.get("/", async(req,res)=>{await res.status(200).send("Hello Data")};
