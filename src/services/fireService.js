const csvtojson = require('csvtojson');//CSV 파일을 JSON 배열로 변환
const Fire = require('../models/Fire');
const sequelize = require('../databases/sequelize');

const fetchFireData = async () => {
  try {
    const filepath = './data/fireData.csv';

    const jsonArray = await csvtojson().fromFile(filepath);

    //await sequelize.sync();//Sequelize가 모든 모델을 데이터베이스에 동기화할 때까지 기다림
    await Fire.sync(); //테이블이 데이터베이스에 없는 경우에만 해당 테이블을 생성

    for (const data of jsonArray) {
        const { "구별": guNm, '2020년': year2020, '2021년': year2021, 
        '2년치 합':sum, '2년치 평균':avg} = data;
        //{ guNm, year2020, year2021, sum, avg }
        const [dbFire, created] = await Fire.findOrCreate({
          where: { guNm }, //중복되는 조건
          defaults: data,
        });
  
        if (!created) { //created 가 false 이면 업데이트
          dbFire.update({ guNm, year2020, year2021, sum, avg });
        }
      }

    console.log('##########Data saved to Fire model##########');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = fetchFireData;
