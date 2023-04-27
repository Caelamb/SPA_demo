const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Users", {
    id: {
        type: DataTypes.UUID,// es un tipo de dato alfanumerico
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: {
                args: [5, 10],
                msg: "The name must contain between 5 and 10 characters"
            },
        },
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "It must be a valid email address"
            }
        }
    },

    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
   { timestamps: false }
 );
};


