
// config.js

require('dotenv').config();
//npm install dotenv 해주고 .env 파일에서 설정된 환경 변수를 로드(.env파일 만들어서 param입력해주세요)

const API_PARAMS = {
    KEY: process.env.API_KEY,
    TYPE: process.env.API_TYPE,
    SERVICE: process.env.API_SERVICE,
    START_INDEX: process.env.API_START_INDEX,
    END_INDEX: process.env.API_END_INDEX,
  };
    
const apiConfig = {
    API_ENDPOINT: `http://openapi.seoul.go.kr:8088/${API_PARAMS.KEY}/json/${API_PARAMS.SERVICE}/${API_PARAMS.START_INDEX}/${API_PARAMS.END_INDEX}`,
    API_PARAMS
    };
    
module.exports = apiConfig;