const customerService = require("../services/customer");
const { body, validationResult } = require("express-validator");

const customerFields = [
  "CustFirstName",
  "CustLastName",
  "CustAddress",
  "CustCity",
  "CustProv",
  "CustPostal",
  "CustCountry",
  "CustHomePhone",
  "CustBusPhone",
  "CustEmail",
  "AgentId",
];

const validateCreateCustomer = [
  body().notEmpty().withMessage("Request body cannot be empty"),
  ...customerFields.map((field) =>
    body(field).notEmpty().withMessage(`${field} is required`)
  ),
  body(customerFields[customerFields.length - 2]) // CustEmail
    .isEmail()
    .withMessage("CustEmail must be a valid email address"),
  body(
    customerFields[customerFields.length - 3],
    customerFields[customerFields.length - 4]
  ) // CustHomePhone and CustBusPhone
    .isMobilePhone()
    .withMessage("Phone must be a valid phone number"),
];

async function createCustomerHandler(req, res) {
  // if not pass validator, return with 400
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { validateCreateCustomer, createCustomerHandler };
