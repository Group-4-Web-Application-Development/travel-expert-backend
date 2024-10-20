const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Booking = sequelize.define(
  "booking",
  {
    BookingId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    BookingDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    BookingNo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    TravelerCount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "customers",
        key: "CustomerId",
      },
    },
    TripTypeId: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: "triptypes",
        key: "TripTypeId",
      },
    },
    PackageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "packages",
        key: "PackageId",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Booking;
