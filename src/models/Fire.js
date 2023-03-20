// models/Fire.js
const { DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');

const Fire = sequelize.define("Fire", {
  union_district: {
    type: DataTypes.TEXT,
    primaryKey: true,
    allowNull: false,
  },
  year_total: {
    // '2년치 합계'
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  year_avg: {
    // '2년치 평균'
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
}, {
  timestamps: false // timestamps 비활성화
});
module.exports = Fire;
