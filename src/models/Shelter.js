// models/Data.js

const { DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');
//define 테이블과 shelter 테이블명 만들어줌(근데 저장 shelters로 되는건 자동인듯...)
const Shelter = sequelize.define('shelter', {
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
        unique: true,
    },
    address: {
        type: DataTypes.STRING,
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

});

module.exports = Shelter;
