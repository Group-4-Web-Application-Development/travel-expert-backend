const express = require("express");
const { getAgencyContactsHandler } = require("../controllers/contact");
const {
  validatePostOrder,
  getPackagesHandler,
  postOrderHandler,
} = require("../controllers/package");

const { getTripTypesHandler } = require("../controllers/triptype");
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
router.post("/packages/order", validatePostOrder, postOrderHandler);

// Trip type
router.get("/triptypes", getTripTypesHandler);

module.exports = router;
