import * as S from "./SeoulSvgMap.style";
import { useEffect } from "react";
import { ROUTE } from "../../routes/Route";
import { useNavigate } from "react-router-dom";

// 1. path#id를 객체 배열로 생성
// 구를 한글로 변환하고 싶은데 svg파일 한글로 변환하면 먹히지가 않음..
// 유니코드를 이용하라는 거 같기도 한데 변경해서 넣어봐도 안되서 잘 모르겠습니다ㅠ
const GU_LIST = [
  { id: "Dobong-gu", label: "도봉구" },
  // { id: "Dongdaemun-gu", label: "동대문구" },
  // { id: "Eunpyeong-gu", label: "은평구" },
  // { id: "Gangbuk-gu", label: "강북구" },
  // { id: "Gangdong-gu", label: "강동구" },
  // { id: "Gangseo-gu", label: "강서구" },
  // { id: "Geumcheon-gu", label: "금천구" },
  // { id: "Guro-gu", label: "구로구" },
  // { id: "Gwanak-gu", label: "관악구" },
  // { id: "Gwangjin-gu", label: "광진구" },
  // { id: "Gangnam-gu", label: "강남구" },
  // { id: "Jongno-gu", label: "종로구" },
  // { id: "Jung-gu", label: "중구" },
  // { id: "Jungnang-gu", label: "중랑구" },
  // { id: "Mapo-gu", label: "마포구" },
  // { id: "Nowon-gu", label: "노원구" },
  // { id: "Seocho-gu", label: "서초구" },
  // { id: "Seodaemun-gu", label: "서대문구" },
  // { id: "Seongbuk-gu", label: "성북구" },
  // { id: "Seongdong-gu", label: "성동구" },
  // { id: "Songpa-gu", label: "송파구" },
  // { id: "Yangcheon-gu", label: "양천구" },
  // { id: "Yeongdeungpo-gu_1_", label: "영등포구" },
  // { id: "Yongsan-gu", label: "용산구" },
];

export const SeoulMap = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   for (const el of GU_LIST) {
  //     const element = document.getElementById(el.id);

  //     console.log("element", element);
  //     element.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       alert("완료!");
  //       console.log("e", e);
  //       console.log(e.target.id + "  clicked !");
  //     });
  //   }
  // }, []);  코치님이 짜주신 로직.

  useEffect(() => {
    for (const el of GU_LIST) {
      const element = document.getElementById(el.id);
      element.addEventListener("click", click);
    }
    function click(e) {
      e.preventDefault();
      // console.log(e.target.id);
      window.alert(e.target.getAttribute("label") + "입니다!\n관련 시설을 찾고 싶은 신가요?");
      navigate(ROUTE.SHELTER_PAGE.link);
      // window.location = <Link to={ROUTE.SHELTER_PAGE.link} /> 링크 to 설정 시
      // 화면이 이동은 하는데 http://localhost:3000/[object%20Object] 여기로 이동됩니다.
      // string을 받아오는데 link to는 객체로 인식되서 object가 떴음.
      // usenavigate를 이용해서 해결.
    }
    // eslint-disable-next-line
  }, []);
  //클릭시 alert창에 해당 문구 뜨면서 ShelterPage로 이동.
  return <S.StyledSeoul />;
};
