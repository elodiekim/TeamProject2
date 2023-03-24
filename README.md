3월 11일 기준 폴더 구조는 CLI 사용하지 않는 형태

-폴더 구조  
services: API와 통신하는 로직을 처리하는 서비스(데이터베이스와 상호작용)  
controllers: API 호출과 관련된 로직을 처리하는 컨트롤러(클라이언트로부터 요청을 받아, 서비스 계층의 함수를 호출하여 데이터를 가져오고, 응답을 반환하는 역할)  
routes: API와 관련된 라우팅 로직을 처리하는 라우터  
models: 데이터베이스와 관련된 모델 코드  
databases: 데이터베이스에 연결하는 코드  
config: API를 호출하기 위해 필요한 매개변수를 저장  
app.js: API를 정의하고 서버를 시작하는 역할  
migrations: 기존 테이블에서 데이터 변경 시 마이그레이션  

##Branch 관리
< master → dev → feature\_(개인이니셜) >

- git checkout -b <branch명> 확인
- git pull origin <branch명> 사용

