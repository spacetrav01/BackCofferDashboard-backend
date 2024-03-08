const express = require("express");
const router = express.Router();
const fetchDataController = require("../Controller/fetchDataController");
module.exports = router.get("/", fetchDataController);
