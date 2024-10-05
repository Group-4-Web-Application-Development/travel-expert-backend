const packageService = require("../services/package");

/**
 * Get a vacation packages
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
async function getPackages(req, res) {
  try {
    const packages = await packageService.getActivePackages();
    res.status(200).json(packages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

function postOrder(req, res) {}

module.exports = { getPackages, postOrder };
