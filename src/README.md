## 📌 커밋 메세지 컨벤션
| 커밋 유형 | 의미 |
| --- | --- |
| feat | 파일, 폴더, 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 수정 |
| style | 코드 형식, 정렬, 주석 등의 변경 (코드 자체의 변경이 없는 경우) |
| refactor | 코드 리팩토링 |
| test | 테스트 코드, 리팩토링 테스트 코드 추가 |
| chore | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore |
| design | CSS 등 사용자 UI 디자인 변경 |
| rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
| delete | 사용하지 않는 변수, 파일 etc 삭제 |
| !BREAKING CHANGE | 커다란 API 변경의 경우 |
| !HOTFIX | 급하게 치명적인 버그를 고쳐야 하는 경우 |

<br>


## 📂 폴더 구조
```
 📦src
 ┣ 📂api : axios 관련 코드
 ┃ ┗ 📄
 ┣ 📂asset : 이미지, 서울 맵
 ┃ ┗ 📄
 ┣ 📂components : 페이지별로 사용하는 컴포넌트 구분
 ┃ ┣ 📂landing
 ┃ ┃ ┗ 📄 
 ┃ ┣ 📂plus : 반딧불 더하기
 ┃ ┃ ┗ 📄 
 ┃ ┣ 📂safety : 반딧불 알리미
 ┃ ┃ ┗ 📄 
 ┃ ┣ 📂seoulMap : landing page 속 서울 지도
 ┃ ┃ ┗ 📄 
 ┃ ┣ 📂shelter : 반딧불 찾기
 ┃ ┃  ┗ 📄 
 ┃ ┗ 📄
 ┣ 📂config : 환경 변수
 ┃ ┗ 📄
 ┣ 📂hooks 
 ┃ ┗ 📄 
 ┣ 📂pages : 페이지별 폴더 구분
 ┃ ┣ 📂landing
 ┃ ┃ ┗ 📄 
 ┃ ┣ 📂plus
 ┃ ┃ ┗ 📄 
 ┃ ┣ 📂safety
 ┃ ┃ ┗ 📄 
 ┃ ┗ 📂shelter
 ┃    ┗ 📄 
 ┣ 📂routes
 ┃  ┗ 📄
 ┣ 📂style : primary color
    ┗ 📄
```