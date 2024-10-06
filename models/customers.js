const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Customer = sequelize.define(
  "Customer",
  {
    CustomerId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    CustFirstName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    CustLastName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    CustAddress: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },
    CustCity: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    CustProv: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    CustPostal: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    CustCountry: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    CustHomePhone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    CustBusPhone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    CustEmail: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    AgentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "agents",
        key: "AgentId",
      },
    },
  },
  {
    tableName: "customers",
    timestamps: false,
  }
);

Customer.associate = (models) => {
  Customer.belongsTo(models.Agent, {
    foreignKey: "AgentId",
    as: "agent",
  });
};

module.exports = Customer;
