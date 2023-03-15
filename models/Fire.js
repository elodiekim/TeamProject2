const { DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');

const Fire = sequelize.define('Fire', {
  guNm: { // '구별' 
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  year2020: { // '2020년' 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  year2021: { // '2021년' 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sum: { // '2년치 합' 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  avg: { // '2년치 평균'
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Fire;
