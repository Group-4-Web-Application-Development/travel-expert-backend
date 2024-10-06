const Customer = require("../models/customers");
/**
 * Create a new customer from form
 * @returns {Promise<Array>} An array of contact information
 */
async function createCustomer() {
  try {
    return await Customer.create();
  } catch (error) {
    throw new Error(
      "Error fetching " + Customer.tableName + ": " + error.message
    );
  }
}

module.exports = {
  createCustomer,
};
