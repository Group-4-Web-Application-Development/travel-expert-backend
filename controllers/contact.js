const contactServices = require("../services/contact");

async function getAgencyContactsHandler(req, res) {
  try {
    const contacts = await contactServices.getAgencyContacts();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { getAgencyContactsHandler };
