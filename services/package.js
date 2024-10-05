const Package = require("../models/packages");

/**
 * Fetch all vacation packages from the database
 * @returns {Promise<Array>} An array of vacation packages
 */
// 1. Each package should display a description, start and end dates, and price.
// 2. Before including a package on the page, make sure that the package end date is greater than (or equal to) the current date
// 3. Also, check whether the package start date is less than the current date, and if it is, write out some CSS to make the start date bold and red
async function getActivePackages() {
  try {
    const packages = await Package.findAll();
    let currentDateTime = new Date();
    const filteredPackages = packages.filter(
      (pkg) => pkg.PkgEndDate >= currentDateTime
    );
    return filteredPackages;
  } catch (error) {
    throw new Error("Error fetching packages: " + error.message);
  }
}

module.exports = {
  getActivePackages,
};
