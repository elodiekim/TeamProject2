## 폴더 구조

services: API와 통신하는 로직을 처리하는 서비스</br>
controllers: API 호출과 관련된 로직을 처리하는 컨트롤러</br>
routes: API와 관련된 라우팅 로직을 처리하는 라우터</br>
models: 데이터베이스와 관련된 모델 코드</br>
databases: 데이터베이스에 연결하는 코드</br>
migrations: 영환경으로부터 다른 운영환경으로 옮기는 작업 폴더</br>
config: API를 호출하기 위해 필요한 매개변수를 저장</br>
app.js: API를 정의하고 서버를 시작하는 역할

## Branch 관리

< master → dev → feature\_(개인이니셜) >

- git checkout -b <branch명> 확인
- git pull origin <branch명> 사용
- git add.
- git commit -m "커밋 메시지”
- git push origin <branch명> 사용
