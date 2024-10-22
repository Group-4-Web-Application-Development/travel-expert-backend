const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const PackagesProductsSuppliers = sequelize.define(
  "packagesProductsSupplier",
  {
    PackageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "packages",
        key: "PackageId",
      },
    },
    ProductSupplierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products_suppliers",
        key: "ProductSupplierId",
      },
    },
  },
  {
    tableName: "packages_products_suppliers",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["PackageId", "ProductSupplierId"],
      },
      {
        fields: ["PackageId"],
      },
      {
        fields: ["ProductSupplierId"],
      },
    ],
  }
);

module.exports = PackagesProductsSuppliers;
