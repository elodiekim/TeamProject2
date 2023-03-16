const { DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');
const Rain = sequelize.define('Rain', {
  union_district: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  July: { 
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  August: { 
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
},{
  timestamps:false,
  modelName: 'Rain',
  tableName: 'Rain'
});

  module.exports = Rain;