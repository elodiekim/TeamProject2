const express = require('express');
const sequelize = require('./databases/sequelize');
const shelterRouter = require('./routes/shelterRouter');
const app = express();

app.use(express.json());
app.use('/shelter', shelterRouter);

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
