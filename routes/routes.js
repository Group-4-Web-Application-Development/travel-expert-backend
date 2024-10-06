const express = require("express");
const { getAgencyContacts } = require("../controllers/contact");
const { getPackages, postOrder } = require("../controllers/package");
const { createCustomerHandler } = require("../controllers/customer");

const router = express.Router();

// Home page
router.get("/", (req, res) => {});

// Contact page
router.get("/contacts", getAgencyContacts);

// Packages page
router.get("/packages", getPackages);
// Order page
router.get("/packages/order", postOrder);

// Create customer
router.post("/customer", createCustomerHandler);

module.exports = router;
