"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor_infor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor_infor.belongsTo(models.User, {
        foreignKey: "doctorId",
      });

      Doctor_infor.belongsTo(models.Allcode, {
        foreignKey: "priceId",
        as: "priceTypeData",
        targetKey: "keyMap",
      });

      Doctor_infor.belongsTo(models.Allcode, {
        foreignKey: "provinceId",
        as: "provinceTypeData",
        targetKey: "keyMap",
      });

      Doctor_infor.belongsTo(models.Allcode, {
        foreignKey: "paymentId",
        as: "paymentTypeData",
        targetKey: "keyMap",
      });
    }
  }
  Doctor_infor.init(
    {
      doctorId: DataTypes.INTEGER,

      clinicId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,

      priceId: DataTypes.STRING,
      provinceId: DataTypes.STRING,
      paymentId: DataTypes.STRING,
      addressClinic: DataTypes.STRING,
      nameClinic: DataTypes.STRING,
      note: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Doctor_infor",
      freezeTableName: true,
    }
  );
  return Doctor_infor;
};
