const Package = require("../models/packages");
const Customer = require("../models/customers");
const Booking = require("../models/bookings");
const { generateBookingNo } = require("../utils/booking_no");

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

/**
 * Create a new customer from form
 * @param {number} packageId - The package'id
 * @param {Object} orderDetail - The detail of the order
 * @param {number} orderDetail.TravelerCount - The number of traveler of the booking
 * @param {string} orderDetail.TripTypeId - The trip type id of the booking
 * @param {string} orderDetail.CustFirstName - The first name of the customer
 * @param {string} orderDetail.CustLastName - The last name of the customer
 * @param {string} orderDetail.CustAddress - The address of the customer
 * @param {string} orderDetail.CustCity - The city of the customer
 * @param {string} orderDetail.CustProv - The abbreviation of province in Canada of the customer
 * @param {string} orderDetail.CustPostal - The postal code of the customer
 * @param {string} orderDetail.CustCountry - The country of the customer
 * @param {string} orderDetail.CustHomePhone - The home phone number of the customer
 * @param {string} orderDetail.CustBusPhone - The business phone number of the customer
 * @param {string} orderDetail.CustEmail - The email address of the customer
 * @param {number} orderDetail.AgentId - The id of agent of the customer
 * @returns {Promise<Array>} An array of contact information
 */
async function postOrder(packageId, orderDetail) {
  try {
    // Create customer
    const customer = await Customer.create({
      CustFirstName: orderDetail.CustFirstName,
      CustLastName: orderDetail.CustLastName,
      CustAddress: orderDetail.CustAddress,
      CustCity: orderDetail.CustCity,
      CustProv: orderDetail.CustProv,
      CustPostal: orderDetail.CustPostal,
      CustCountry: orderDetail.CustCountry,
      CustHomePhone: orderDetail.CustHomePhone,
      CustBusPhone: orderDetail.CustBusPhone,
      CustEmail: orderDetail.CustEmail,
      AgentId: orderDetail.AgentId,
    });

    // Create booking
    const booking = await Booking.create({
      BookingDate: new Date(),
      BookingNo: generateBookingNo(),
      TravelerCount: orderDetail.TravelerCount,
      CustomerId: customer.CustomerId,
      TripTypeId: orderDetail.TripTypeId,
      PackageId: packageId,
    });

    return { CustomerId: customer.CustomerId, BookingId: booking.BookingId };
  } catch (error) {
    throw new Error("Error post a new order: " + error.message);
  }
}

module.exports = {
  getActivePackages,
  postOrder,
};
