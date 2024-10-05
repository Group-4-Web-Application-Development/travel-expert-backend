const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const package = sequelize.define(
  "package",
  {
    PackageId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    PkgName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    PkgStartDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    PkgEndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    PkgDesc: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    PkgBasePrice: {
      type: DataTypes.DECIMAL(19, 4),
      allowNull: false,
    },
    PkgAgencyCommission: {
      type: DataTypes.DECIMAL(19, 4),
      allowNull: false,
    },
  },
  {
    tableName: "packages",
    timestamps: false,
  }
);

module.exports = package;
