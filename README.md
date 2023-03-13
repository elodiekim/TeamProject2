3월 11일 기준 폴더 구조는 CLI 사용하지 않는 형태

-폴더 구조
services: API와 통신하는 로직을 처리하는 서비스  
controllers: API 호출과 관련된 로직을 처리하는 컨트롤러  
routes: API와 관련된 라우팅 로직을 처리하는 라우터  
models: 데이터베이스와 관련된 모델 코드  
databases: 데이터베이스에 연결하는 코드  
config: API를 호출하기 위해 필요한 매개변수를 저장  
app.js: API를 정의하고 서버를 시작하는 역할  
migrations: 기존 테이블에서 데이터 변경 시 마이그레이션  

