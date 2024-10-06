const Customer = require("../models/customers");
/**
 * Create a new customer from form
 * @param {Object} customer - The customer object
 * @param {string} customer.CustFirstName - The first name of the customer
 * @param {string} customer.CustLastName - The last name of the customer
 * @param {string} customer.CustAddress - The address of the customer
 * @param {string} customer.CustCity - The city of the customer
 * @param {string} customer.CustProv - The abbreviation of province in Canada of the customer
 * @param {string} customer.CustPostal - The postal code of the customer
 * @param {string} customer.CustCountry - The country of the customer
 * @param {string} customer.CustHomePhone - The home phone number of the customer
 * @param {string} customer.CustBusPhone - The business phone number of the customer
 * @param {string} customer.CustEmail - The email address of the customer
 * @param {number} customer.AgentId - The id of agent of the customer
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
