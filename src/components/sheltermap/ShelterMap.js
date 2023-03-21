import * as S from "./ShelterMap.style";
import React, { useEffect,useState } from "react";
import { useShelter } from "../../hooks";
import { Modal } from "../shelterlist/Modal";
// import { Link } from "react-router-dom";
const { kakao } = window;

export const ShelterMap = () => {
  //데이터 받아오기
  const { shelter } = useShelter();
  const [modalOpen, setModalOpen] = useState(false);
  

  useEffect(() => {
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(37.550229, 126.977279), // 지도의 중심좌표=임시로 남산타워
      level: 5, // 지도의 확대 레벨
    };
    // 지도를 표시할 div와 지도 옵션으로  지도를 생성
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커
    const positions = shelter.map((shelter) => {
      return {
        title: shelter.shelterNm,
        latlng: new kakao.maps.LatLng(shelter.yCord, shelter.xCord),
      };
    });

    // 마커 이미지의 이미지 주소입니다
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      const markerParams = {
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
        clickable: true,
      };
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker(markerParams);
      // 마커를 지도에 표시합니다.
      marker.setMap(map);

      //🚀🚀🚀🚀🚀 마커를 클릭 시 인포윈도우
      const iwContent =
          //ModalButton을 import해오는 방법을 모르겠음
          // "<ModalButton shelter={shelter.shelterNm}></ModalButton>" +
          //그냥 버튼 태그는 사용 가능한데
          // "<button onclick={onOpen}>보기</button>" +
          positions[i].title,
        // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        setModalOpen({
          open: true,
          data: { marker, markerParams },
        });
        infowindow.open(map, marker);
      });
    }
  }, [shelter]);


  return (
    <React.Fragment>
      <S.Map id="map" />
      {modalOpen && 
        <Modal 
          setModalOpen={setModalOpen}
          />}
    </React.Fragment>
  );
};