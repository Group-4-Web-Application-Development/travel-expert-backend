const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Agent = sequelize.define(
  "agent",
  {
    AgentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    AgtFirstName: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    AgtMiddleInitial: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    AgtLastName: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    AgtBusPhone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    AgtEmail: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    AgtPosition: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    AgencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "agencies",
        key: "AgencyId",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Agent;
