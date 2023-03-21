// models/Shelter.js
const { DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');

const Shelter = sequelize.define('Shelter', {
    cityNm: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    guNm: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shelterType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shelterNm: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    qty:{
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    xCord: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    yCord: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
}, {
    timestamps: false // timestamps 비활성화
  });
module.exports = Shelter;
