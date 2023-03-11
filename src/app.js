const axios = require('axios');
const express = require('express');
const app = express();
const Shelter = require('./models/Shelter');
const sequelize = require('./database/sequelize');

// API 호출 엔드포인트 key 부분 분리 해야함
app.get('/shelter', async (req, res) => {
  // API 호출을 위한 요청 파라미터
  const params = {
    KEY: '',
    TYPE: 'json',
    SERVICE:'TbGtnVictP',
    START_INDEX:1,
    END_INDEX:15,
  };
  
  // API 엔드포인트 //key부분 수정해야함
  const API_ENDPOINT = 'http://openapi.seoul.go.kr:8088/{KEY}/json/TbGtnVictP/1/15';

  try {
    // API 호출 
    // {params} => GET 요청 시 함께 전송할 쿼리 파라미터
    // 데이터 추출 및 가공이 완료된 객체들을 data 변수에 할당
    const response = await axios.get(API_ENDPOINT, { params });
    const result = response.data;
    const rows = result.TbGtnVictP.row;
    const data = rows.map(row => ({
      ssNm:row.SD_NM,
      sggNm: row.SGG_NM,
      gbAcmd:row.GB_ACMD,
      equpNm:row.EQUP_NM,
      locSfprA:row.LOC_SFPR_A,
    }));

    // 중복된 데이터빼고 저장, findOrCreate 는 특정 요소를 검색하거나 존재하지 않으면 새로 생성
    //데이터는 data 변수에 배열 형태로 담겨있음, 
    //dbShelter로 검색된 테이블의 행 &created로 새로운 행을 만들었는지 여부(boolean)
    await sequelize.sync();
    for (const item of data) {
        const [dbShelter, created] = await Shelter.findOrCreate({
          where: {
            ssNm: item.ssNm,
            sggNm: item.sggNm,
            gbAcmd: item.gbAcmd,
            equpNm: item.equpNm,
            locSfprA: item.locSfprA,
          },
          defaults: item //defaults 옵션으로 추가할 값을 지정
        });
      }
      res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});


// 데이터베이스에 저장된 데이터 조회 엔드포인트
app.get('/shelter/data', async (req, res) => {
  try {
    const data = await Shelter.findAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});


// 서버 실행 & 데이터베이스 연결 여부
const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
    try {
      await sequelize.authenticate();
      console.log('데이터베이스 연결 성공');
    } catch (error) {
      console.error('데이터베이스 연결 실패');
    }
    console.log(`Server is running at ${PORT}`);
  });
  