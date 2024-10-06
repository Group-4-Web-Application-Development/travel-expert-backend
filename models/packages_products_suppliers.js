const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const PackagesProductsSuppliers = sequelize.define(
  "PackagesProductsSuppliers",
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

// Define associations
PackagesProductsSuppliers.associate = (models) => {
  // Define association with Package
  PackagesProductsSuppliers.belongsTo(models.Package, {
    foreignKey: "PackageId",
    as: "package",
  });

  // Define association with ProductSupplier
  PackagesProductsSuppliers.belongsTo(models.ProductSupplier, {
    foreignKey: "ProductSupplierId",
    as: "productSupplier",
  });
};

module.exports = PackagesProductsSuppliers;
