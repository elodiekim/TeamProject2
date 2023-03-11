// shelterController.js

const axios = require('axios');
const Shelter = require('../models/Shelter');
const config = require('../config/config');

const getShelter = async (req, res) => {
  try {
    const response = await axios.get(config.API_ENDPOINT, { params: config.API_PARAMS });
    const result = response.data;
    //console.log(config.API_ENDPOINT);
    const rows = result.TbGtnVictP.row;
    const data = rows.map((row) => ({
      ssNm: row.SD_NM,
      sggNm: row.SGG_NM,
      gbAcmd: row.GB_ACMD,
      equpNm: row.EQUP_NM,
      locSfprA: row.LOC_SFPR_A,
    }));

    await Shelter.sync();
    for (const item of data) {
      const [dbShelter, created] = await Shelter.findOrCreate({
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
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getShelterData = async (req, res) => {
  try {
    const data = await Shelter.findAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getShelter, getShelterData };
