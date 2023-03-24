//app.js
const path = require("path");
const express = require("express");
const sequelize = require("./src/databases/sequelize.js");
const shelterRouter = require("./src/routes/shelterRouter");
const rainRouter = require("./src/routes/rainRouter");
const fireRouter = require("./src/routes/fireRouter");
const postRouter = require("./src/routes/postRouter");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/shelter", shelterRouter);
app.use("/rain", rainRouter);
app.use("/fire", fireRouter);
app.use("/post", postRouter);
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("데이터베이스 연결 성공");
    await sequelize.sync(); //모델 구조 동기화
  } catch (error) {
    console.error("데이터베이스 연결 실패");
  }
  console.log(`Server is running at ${PORT}`);
});
