const express = require("express");
const axios = require("axios");
const router = express.Router();
const { appDetails } = require("./about");
const { getAppConfig } = require("./appConfig");
const { getHealth } = require("./health");

router.get("/health", getHealth);
router.get("/about", appDetails);
router.get("/api/appconfig", getAppConfig);
router.get("/store/api/locations", (req, res) => {
  const data = [
    {
      id: "60",
      name: "Arlington Highlands",
      addressLine1: "4000 Arlington Highlands Blvd",
      addressLine2: "Suite 101",
      city: "Arlington",
      state: { id: "TX", name: "Texas" },
      zipCode: "76018",
      status: "",
      isAcceptingOrders: true,
      isFarAway: false,
      phone: "(817) 422-0888",
      market: "Dallas/Fort Worth",
      isCustomClosetStore: false,
    },
    {
      id: "22",
      name: "Dallas Northwest Hwy",
      addressLine1: "7700 West Northwest Highway",
      addressLine2: null,
      city: "Dallas",
      state: { id: "TX", name: "Texas" },
      zipCode: "75225",
      status: "",
      isAcceptingOrders: true,
      isFarAway: false,
      phone: "(214) 373-3131",
      market: "Dallas/Fort Worth",
      isCustomClosetStore: false,
    },
    {
      id: "27",
      name: "Southlake",
      addressLine1: "1200 Main Street",
      addressLine2: null,
      city: "Southlake",
      state: { id: "TX", name: "Texas" },
      zipCode: "76092",
      status: "",
      isAcceptingOrders: true,
      isFarAway: false,
      phone: "(817) 488-9955",
      market: "Dallas/Fort Worth",
      isCustomClosetStore: false,
    },
    {
      id: "108",
      name: "Dallas Galleria - New",
      addressLine1: "13710 Dallas Parkway",
      addressLine2: "Suite B",
      city: "Dallas",
      state: { id: "TX", name: "Texas" },
      zipCode: "75240",
      status: "",
      isAcceptingOrders: true,
      isFarAway: false,
      phone: "(972) 458-9228",
      market: "Dallas/Fort Worth",
      isCustomClosetStore: true,
    },
    {
      id: "69",
      name: "Fort Worth",
      addressLine1: "4601 West Freeway",
      addressLine2: "Suite 500",
      city: "Fort Worth",
      state: { id: "TX", name: "Texas" },
      zipCode: "76107",
      status: "",
      isAcceptingOrders: true,
      isFarAway: false,
      phone: "(682) 224-7460",
      market: "Dallas/Fort Worth",
      isCustomClosetStore: false,
    },
    {
      id: "49",
      name: "Plano Stonebriar",
      addressLine1: "8460 Parkwood Blvd.",
      addressLine2: null,
      city: "Plano",
      state: { id: "TX", name: "Texas" },
      zipCode: "75024",
      status: "",
      isAcceptingOrders: true,
      isFarAway: false,
      phone: "(214) 705-9050",
      market: "Dallas/Fort Worth",
      isCustomClosetStore: false,
    },
    {
      id: "50",
      name: "Fairview",
      addressLine1: "151 East Stacy Road",
      addressLine2: null,
      city: "Fairview",
      state: { id: "TX", name: "Texas" },
      zipCode: "75069",
      status: "",
      isAcceptingOrders: true,
      isFarAway: false,
      phone: "(972) 363-2266",
      market: "Dallas/Fort Worth",
      isCustomClosetStore: false,
    },
  ];
  setTimeout(() => {
    res.json(data);
  }, 2000);
});

module.exports = router;
