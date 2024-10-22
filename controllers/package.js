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

const validatePostOrder = [
  // Check body is empty
  body().notEmpty().withMessage("Request body cannot be empty"),
  // Check all fields must not empty
  body("travelerCount").notEmpty().withMessage("Traveler count is required"),
  body("tripTypeId").notEmpty().withMessage("Trip type is required"),
  body("packageId").notEmpty().withMessage("Package is required"),
  body("custFirstName").notEmpty().withMessage("First name is required"),
  body("custLastName").notEmpty().withMessage("Last name is required"),
  body("custAddress").notEmpty().withMessage("Address is required"),
  body("custCity").notEmpty().withMessage("City is required"),
  body("custProv").notEmpty().withMessage("Province is required"),
  body("custPostal").notEmpty().withMessage("Postal code is required"),
  body("custCountry").notEmpty().withMessage("Country is required"),
  body("custBusPhone")
    .notEmpty()
    .withMessage("Business phone number is required"),
  body("custEmail").notEmpty().withMessage("Email address is required"),
  body("userId").notEmpty().withMessage("User id is required"),
  body("password").notEmpty().withMessage("Password is required"),
  body("custEmail") // CustEmail
    .isEmail()
    .withMessage("Email address must be a valid email address"),
  body("custHomePhone")
    .optional({ checkFalsy: true })
    .trim()
    .isMobilePhone()
    .withMessage("Home phone number must be a valid phone number"),
  body("custBusPhone")
    .isMobilePhone()
    .withMessage("Businees phone number must be a valid phone number"),
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
    if (
      error.message.includes("couldn't find the selected trip type") ||
      error.message.includes("couldn't find the selected package")
    ) {
      res.status(400).json(new ErrorResponse(error.message));
      return;
    }
    res.status(500).json(new ErrorResponse(error.message));
  }
}

module.exports = { validatePostOrder, getPackagesHandler, postOrderHandler };
