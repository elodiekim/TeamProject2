const express = require('express');
const sequelize = require('./src/databases/sequelize');
const shelterRouter = require('./src/routes/shelterRouter');
const csvtojson = require('./assets/csvToJson');
const app = express();

app.use(express.json());
app.use('/shelter', shelterRouter);

//csvtojson(); // json 파일로 변경시 주석해제하고 사용해주세요 
//assets/files에 csv파일 넣고 csvToJson.js에서 파일명 변경후 사용하시면 됩니다.

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('데이터베이스 연결 성공');
  } catch (error) {
    console.error('데이터베이스 연결 실패');
  }
  console.log(`Server is running at ${PORT}`);
});
