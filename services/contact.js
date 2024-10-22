const Agency = require("../models/agency");
/**
 * Fetch all agency's contact information from the database
 * @returns {Promise<Array>} An array of contact information
 */
async function getAgencyContacts() {
  try {
    return await Agency.findAll();
  } catch (error) {
    throw new Error(
      "Error fetching " + Agency.tableName + ": " + error.message
    );
  }
}

module.exports = {
  getAgencyContacts,
};
