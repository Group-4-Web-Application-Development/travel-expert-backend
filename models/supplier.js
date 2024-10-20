const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Supplier = sequelize.define(
  "supplier",
  {
    SupplierId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    SupName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Supplier;
