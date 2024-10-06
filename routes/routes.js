const express = require("express");
const { getAgencyContactsHandler } = require("../controllers/contact");
const {
  getPackagesHandler,
  postOrderHandler,
} = require("../controllers/package");
const {
  validateCreateCustomer,
  createCustomerHandler,
} = require("../controllers/customer");

const router = express.Router();

// Home page
router.get("/", (req, res) => {});

// Contact page
router.get("/contacts", getAgencyContactsHandler);

// Packages page
router.get("/packages", getPackagesHandler);
// Order page
router.get("/packages/order", postOrderHandler);

// Create customer
router.post("/customer", validateCreateCustomer, createCustomerHandler);

module.exports = router;
