const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

// Define the ProductSupplier model
const ProductSupplier = sequelize.define(
  "ProductSupplier",
  {
    ProductSupplierId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "products",
        key: "ProductId",
      },
    },
    SupplierId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "suppliers",
        key: "SupplierId",
      },
    },
  },
  {
    tableName: "products_suppliers",
    timestamps: false,
  }
);

// Define associations
ProductSupplier.associate = (models) => {
  ProductSupplier.belongsTo(models.Product, {
    foreignKey: "ProductId",
    as: "product",
  });

  // Define association with Supplier
  ProductSupplier.belongsTo(models.Supplier, {
    foreignKey: "SupplierId",
    as: "supplier",
  });
};

module.exports = ProductSupplier;
