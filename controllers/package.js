const packageService = require("../services/package");
const { body, validationResult } = require("express-validator");
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
  "travelerCount",
  "tripTypeId",
  "packageId",
  "custFirstName",
  "custLastName",
  "custAddress",
  "custCity",
  "custProv",
  "custPostal",
  "custCountry",
  "custBusPhone",
  "custEmail",
  "userId",
  "password",
];

const validatePostOrder = [
  // Check body is empty
  body().notEmpty().withMessage("Request body cannot be empty"),
  // Check all fields must not empty
  ...postOrderFields.map((field) =>
    body(field).notEmpty().withMessage(`${field} is required`)
  ),
  body("custEmail") // CustEmail
    .isEmail()
    .withMessage("custEmail must be a valid email address"),
  body("custHomePhone")
    .optional({ checkFalsy: true })
    .trim()
    .isMobilePhone()
    .withMessage("Home Phone must be a valid phone number"),
  body("custBusPhone")
    .isMobilePhone()
    .withMessage("Businees Phone must be a valid phone number"),
  body("agentId").optional(),
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
    const order = await packageService.postOrder(req.body);
    res.status(201).json({
      message: "success",
      data: {
        customerId: order.CustomerId,
        bookingId: order.BookingId,
      },
    });
  } catch (error) {
    res.status(500).json(new ErrorResponse(error.message));
  }
}

module.exports = { validatePostOrder, getPackagesHandler, postOrderHandler };
