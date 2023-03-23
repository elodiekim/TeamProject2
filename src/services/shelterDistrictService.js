const Shelter = require('../models/Shelter');
const sequelize = require('../databases/sequelize');
const Sequelize = require('sequelize');

const getShelterDistrictData = async () => {
    try {
    //   const data = await Shelter.findAll({
    //     //union_district 컬럼을 기준으로 count
    //     attributes: ['union_district', 
    //     [Sequelize.fn('COUNT', Sequelize.col('union_district')), 'count']],//
        
    //     group: ['union_district']
    //   });
        //attributes: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']]
    //Sequelize.col()특정 컬럼 지정
    const data = await Shelter.findAll({
        attributes: [
          'union_district',
          [Sequelize.fn('COUNT', Sequelize.col('union_district')), 'count'],
          [Sequelize.literal('COUNT(*) / COUNT(DISTINCT guNm)'), 'avg']
        ],
        group: ['union_district']
      });
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

module.exports =getShelterDistrictData;