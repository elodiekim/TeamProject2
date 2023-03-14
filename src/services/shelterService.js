// shelterService.js
const axios = require('axios');
const Shelter = require('../models/Shelter');
const config = require('../config/shelterConfig');
const sequelize = require('../databases/sequelize');

const fetchShelterData = async () => {
    try {
      const response = await axios.get(config.API_ENDPOINT, { params: config.API_PARAMS });
      //axios를 이용해 config.API_ENDPOINT에 GET 요청을 보내고, config.API_PARAMS 같이 전달
      const result = response.data;
      const rows = result.TbGtnVictP.row;//응답받은 데이터에서 실제 데이터를 rows에 저장
      //console.log(config.API_ENDPOINT);
      const data = rows.map((row) => ({
        cityNm: row.SD_NM, //시 cityNm
        guNm: row.SGG_NM, //구명 guNm
        shelterType: row.GB_ACMD, //시설구분명  shelterType
        shelterNm: row.EQUP_NM,//시설명 shelterNm
        address: row.LOC_SFPR_A,//주소 address
        xCord: row.XCORD, //위도
        yCord: row.YCORD, //경도
      }));
  
      await Shelter.sync();//Shelter 테이블이 존재하지 않으면 테이블을 생성
      await sequelize.sync(); // 모든 모델을 동기화->모델이 이미 존재하면 아무 작업도 하지않음
      console.log('##################'+data.length)
     
        const test = await Shelter.bulkCreate(data)

    
      return test;
      
    } catch (error) {
      //console.error(error);
      throw new Error(error.message);
    }
  };
  
  module.exports = fetchShelterData ;
  