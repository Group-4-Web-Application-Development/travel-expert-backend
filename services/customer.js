const Customer = require("../models/customers");
/**
 * Create a new customer from form
 * @param {Object} customer - The customer object
 * @param {string} customer.firstname - The first name of the customer
 * @param {string} customer.lastname - The last name of the customer
 * @param {string} customer.address - The address of the customer
 * @param {string} customer.city - The city of the customer
 * @param {string} customer.province - The abbreviation of province in Canada of the customer
 * @param {string} customer.postal - The postal code of the customer
 * @param {string} customer.country - The country of the customer
 * @param {string} customer.homePhone - The home phone number of the customer
 * @param {string} customer.busPhone - The business phone number of the customer
 * @param {string} customer.email - The email address of the customer
 * @param {number} customer.agentId - The id of agent of the customer
 * @returns {Promise<Array>} An array of contact information
 */
async function createCustomer(customer) {
  try {
    return await Customer.create(customer);
  } catch (error) {
    throw new Error(
      "Error fetching " + Customer.tableName + ": " + error.message
    );
  }
}

module.exports = {
  createCustomer,
};
