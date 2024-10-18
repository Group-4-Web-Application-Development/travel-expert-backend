const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const TripType = sequelize.define(
  "triptype",
  {
    TripTypeId: {
      type: DataTypes.STRING(1),
      primaryKey: true,
      allowNull: false,
    },
    TTName: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TripType;
