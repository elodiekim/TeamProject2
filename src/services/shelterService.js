// shelterService.js
const axios = require('axios');
const Shelter = require('../models/Shelter');
const config = require('../config/config');

const fetchShelterData = async () => {
  try {
    const response = await axios.get(config.API_ENDPOINT, { params: config.API_PARAMS });
    //axios를 이용해 config.API_ENDPOINT에 GET 요청을 보내고, config.API_PARAMS 같이 전달
    const result = response.data;
    const rows = result.TbGtnVictP.row;//응답받은 데이터에서 실제 데이터를 rows에 저장
    //console.log(config.API_ENDPOINT);
    const data = rows.map((row) => ({
      ssNm: row.SD_NM,
      sggNm: row.SGG_NM,
      gbAcmd: row.GB_ACMD,
      equpNm: row.EQUP_NM,
      locSfprA: row.LOC_SFPR_A,
    }));

    await Shelter.sync();//Shelter 테이블이 존재하지 않으면 테이블을 생성
    for (const item of data) {
      const [dbShelter, created] = await Shelter.findOrCreate({
        //데이터는 dbShelter 변수에, 생성 여부는 created 변수에 저장
        where: {
          ssNm: item.ssNm,
          sggNm: item.sggNm,
          gbAcmd: item.gbAcmd,
          equpNm: item.equpNm,
          locSfprA: item.locSfprA,
        },
        defaults: item,
      });
      // 중복된 데이터가 있을 경우
      if (!created) {
        // 기존 데이터 업데이트 수행
        dbShelter.update(item);
      }
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = fetchShelterData ;
