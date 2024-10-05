const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Supplier = sequelize.define(
  "Supplier",
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
    tableName: "suppliers",
    timestamps: false,
  }
);

module.exports = Supplier;
