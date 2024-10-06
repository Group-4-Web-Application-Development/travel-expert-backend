const express = require("express");
const { getAgencyContactsHandler } = require("../controllers/contact");
const {
  validatePostOrder,
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
// Post booking order
router.post("/packages/:packageId/order", validatePostOrder, postOrderHandler);

// Create customer
router.post("/customer", validateCreateCustomer, createCustomerHandler);

module.exports = router;
