const packageService = require("../services/package");
const { param, body, validationResult } = require("express-validator");
const { ErrorResponse } = require("./error");

/**
 * Get a vacation packages
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
async function getPackagesHandler(req, res) {
  try {
    const packages = await packageService.getActivePackages();
    res.status(200).json(packages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const postOrderFields = [
  "TravelerCount",
  "TripTypeId",
  "CustFirstName",
  "CustLastName",
  "CustAddress",
  "CustCity",
  "CustProv",
  "CustPostal",
  "CustCountry",
  "CustHomePhone",
  "CustBusPhone",
  "CustEmail",
  "AgentId",
];

const validatePostOrder = [
  // Check body is empty
  body().notEmpty().withMessage("Request body cannot be empty"),
  // Check param is empty
  param("packageId").notEmpty().withMessage("packageId param is empty"),
  // Check all fields must not empty
  ...postOrderFields.map((field) =>
    body(field).notEmpty().withMessage(`${field} is required`)
  ),
  param("packageId")
    .isInt()
    .withMessage("packageId param must be valid integer"),
  body("CustEmail") // CustEmail
    .isEmail()
    .withMessage("CustEmail must be a valid email address"),
  body("CustHomePhone", "CustBusPhone") // CustHomePhone and CustBusPhone
    .isMobilePhone()
    .withMessage("Phone must be a valid phone number"),
];

async function postOrderHandler(req, res) {
  // if not pass validator, return with 400
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(new ErrorResponse(errors.array()[0].msg, errors.array()[0]));
  }
  try {
    const order = await packageService.postOrder(
      req.params["packageId"],
      req.body
    );
    res.status(201).json({
      message: "Success",
      data: {
        customerId: order.CustomerId,
        bookingId: order.BookingId,
      },
    });
  } catch (error) {
    res.status(400).json(new ErrorResponse(error.message));
  }
}

module.exports = { validatePostOrder, getPackagesHandler, postOrderHandler };
