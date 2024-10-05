const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Agent = sequelize.define(
  "Agent",
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
    tableName: "agents",
    timestamps: false,
  }
);

// Define associations
Agent.associate = (models) => {
  Agent.belongsTo(models.Agency, {
    foreignKey: "AgencyId",
    as: "agency",
  });
};

module.exports = Agent;
