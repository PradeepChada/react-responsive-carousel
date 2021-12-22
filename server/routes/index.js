const express = require("express");
const axios = require("axios");
const router = express.Router();
const { appDetails } = require("./about");
const { getAppConfig } = require("./appConfig");
const { getHealth } = require("./health");

router.get("/health", getHealth);
router.get("/about", appDetails);
router.get("/api/appconfig", getAppConfig);

//Fake API Routes;

router.post("/api/login", (req, res) => {
  const { emp_id, password } = req.body;
  if (emp_id?.length === 7 && password) {
    res.send({
      firstName: "Kip",
      lastName: "Robbinson",
      email: "kip@gmail.com",
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
