const express = require("express");
const router = express.Router();
const { appDetails } = require("./about");
const { getAppConfig } = require("./appConfig");
const { getHealth } = require("./health");

router.get('/health', getHealth)
router.get('/about', appDetails)
router.get('/api/appconfig', getAppConfig)

module.exports = router;
