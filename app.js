const express = require('express');
const sequelize = require('./databases/sequelize');
const shelterRouter = require('./routes/shelterRouter');
//const rainRouter = require('./routes/rainRouter');
//const fireRouter = require('./routes/fireRouter');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/shelter', shelterRouter);
//app.use('/rain', rainRouter);
//app.use('/fire',fireRouter);

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
