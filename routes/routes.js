const express = require("express");
const { getContacts } = require("../controllers/contact");
const { getPackages, postOrder } = require("../controllers/package");

const router = express.Router();

// Home page
router.get("/", (req, res) => {});

// Contact page
router.get("/contacts", getContacts);

// Packages page
router.get("/packages", getPackages);
// Order page
router.get("/packages/order", postOrder);

module.exports = router;
