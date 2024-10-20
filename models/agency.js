const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Agency = sequelize.define(
  "agency",
  {
    AgencyId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    AgncyAddress: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    AgncyCity: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    AgncyProv: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    AgncyPostal: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    AgncyCountry: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    AgncyPhone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    AgncyFax: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Agency;
