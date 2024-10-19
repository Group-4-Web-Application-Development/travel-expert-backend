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
 * @param {Object} orderDetail - The detail of the order
 * @param {number} orderDetail.travelerCount - The number of traveler of the booking
 * @param {string} orderDetail.tripTypeId - The trip type id of the booking
 * @param {string} orderDetail.packageId The package'id
 * @param {string} orderDetail.custFirstName - The first name of the customer
 * @param {string} orderDetail.custLastName - The last name of the customer
 * @param {string} orderDetail.custAddress - The address of the customer
 * @param {string} orderDetail.custCity - The city of the customer
 * @param {string} orderDetail.custProv - The abbreviation of province in Canada of the customer
 * @param {string} orderDetail.custPostal - The postal code of the customer
 * @param {string} orderDetail.custCountry - The country of the customer
 * @param {string} orderDetail.custHomePhone - The home phone number of the customer
 * @param {string} orderDetail.custBusPhone - The business phone number of the customer
 * @param {string} orderDetail.custEmail - The email address of the customer
 * @param {number} orderDetail.agentId - The id of agent of the customer
 * @returns {Promise<Array>} An array of contact information
 */
async function postOrder(orderDetail) {
  try {
    const [customer, created] = await Customer.findOrCreate({
      where: {
        CustFirstName: orderDetail.custFirstName,
        CustLastName: orderDetail.custLastName,
        CustEmail: orderDetail.custEmail, // assuming that email is unique
      },
      defaults: {
        CustFirstName: orderDetail.custFirstName,
        CustLastName: orderDetail.custLastName,
        CustAddress: orderDetail.custAddress,
        CustCity: orderDetail.custCity,
        CustProv: orderDetail.custProv,
        CustPostal: orderDetail.custPostal,
        CustCountry: orderDetail.custCountry,
        CustHomePhone: orderDetail.custHomePhone,
        CustBusPhone: orderDetail.custBusPhone,
        AgentId: orderDetail.agentId,
      }, // Data to create if not exists
    });

    // Create booking
    const booking = await Booking.create({
      BookingDate: new Date(),
      BookingNo: generateBookingNo(),
      TravelerCount: orderDetail.travelerCount,
      CustomerId: customer.CustomerId,
      TripTypeId: orderDetail.tripTypeId,
      PackageId: orderDetail.packageId,
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
