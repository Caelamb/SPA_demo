const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("post", {
    id: {
        type: DataTypes.INTEGER,// es un tipo de dato alfanumerico
        autoIncrement: true,
        primaryKey: true,
    },

    tittle: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    body: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
  }, 
    { freezeTableName: true, timestamps: false }
  );
};
