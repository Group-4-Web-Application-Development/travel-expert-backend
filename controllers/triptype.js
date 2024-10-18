const tripTypeService = require("../services/triptype");

async function getTripTypesHandler(req, res) {
  try {
    const triptypes = await tripTypeService.getTripTypes();
    res.status(200).json(triptypes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { getTripTypesHandler };
