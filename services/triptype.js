const TripType = require("../models/triptype");
/**
 * Fetch all trip types from the database
 * @returns {Promise<Array>} An array of trip types
 */
async function getTripTypes() {
  try {
    return await TripType.findAll();
  } catch (error) {
    throw new Error(
      "Error fetching " + TripType.tableName + ": " + error.message
    );
  }
}

module.exports = { getTripTypes };
