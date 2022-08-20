const express = require("express");
const { createRegister } = require("../controllers/RegisterController");

const router = express.Router();

router.post("/register", createRegister);

module.exports = router;
