// shelterService.js
const axios = require('axios');
const Shelter = require('../models/Shelter');
const config = require('../config/shelterConfig');
const sequelize = require('../databases/sequelize');


const fetchShelterData = async () => {
  try {
    const response = await axios.get(config.API_ENDPOINT, { params: config.API_PARAMS });
    const result = response.data;
    const rows = result.TbGtnVictP.row;
    const data = rows.map((row) => {
      let union_district = '';
      switch (row.SGG_NM) {
        case '중구':
        case '용산구':
        case '종로구':
          union_district = '도심권';
          break;
        case '중랑구':
        case '동대문구':
        case '성동구':
        case '광진구':
          union_district = '동북1생활권';
          break;
        case '강북구':
        case '도봉구':
        case '성북구':
        case '노원구':
          union_district = '동북2생활권';
          break;
        case '강남구':
        case '서초구':
          union_district = '동남1생활권';
          break;
        case '강동구':
        case '송파구':
          union_district = '동남2생활권';
          break;
        case '은평구':
        case '서대문구':
        case '마포구':
          union_district = '서북생활권';
          break;
        case '강서구':
        case '양천구':
          union_district = '서남1생활권';
          break;
        case '영등포구':
        case '구로구':
        case '금천구':
          union_district = '서남2생활권';
          break;
        case '동작구':
        case '관악구':
          union_district = '서남3생활권';
          break;
        default:
          union_district = '';
      }
    
      return {
        cityNm: row.SD_NM,
        guNm: row.SGG_NM,
        shelterType: row.GB_ACMD,
        shelterNm: row.EQUP_NM,
        address: row.LOC_SFPR_A,
        qty: row.QTY_CPTY,
        xCord: row.XCORD,
        yCord: row.YCORD,
        union_district: union_district
      };
    });
    const createdData = await Shelter.bulkCreate(data);
    return createdData;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

  const getShelterData = async () => {
    try{
      const data = await Shelter.findAll();
      return data;

    }catch{
      console.log(error);
      throw new Error(error.message)

    }
  }

  const getGuNmShelterData = async (guNm) => {
    try{

      const data = await Shelter.findAll({
        where:{ guNm },
    });
    return data;

    }catch{
      console.log(error);
      throw new Error(error.message)

    }
  }
  // const getShelterDistrictData = async () => {
  //   try {
  //     const data = await Shelter.findAll({
  //       attributes: ['union_district', [Sequelize.fn('COUNT', Sequelize.col('union_district')), 'count']],
  //       group: ['union_district']
  //     });
  //     return data;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // };

  module.exports = { fetchShelterData, getShelterData, getGuNmShelterData };
