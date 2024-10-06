const customerService = require("../services/customer");

async function createCustomerHandler(req, res) {
  try {
    const customer = await customerService.createCustomer;
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { createCustomerHandler };
