const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "post",
    {
      id: {
        type: DataTypes.INTEGER, // ES ALFANUMERICO  ASDASDADAS4848-GF464565-ASDAS5
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
