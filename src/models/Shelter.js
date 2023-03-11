// models/Data.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
//define 테이블과 shelter 테이블명 만들어줌(근데 저장 shelters로 되는건 자동인듯...)
const Shelter = sequelize.define('shelter', {
  ssNm: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sggNm: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gbAcmd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  equpNm: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  locSfprA: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Shelter;
