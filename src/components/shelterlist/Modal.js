// import { useState } from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";
import logo from "../../asset/반딧불이_logo.png";

export const Modal = ({ setModalOpen, shelterNm }) => {
  const onClose = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <ModalSection>
      <button className="close" onClick={onClose}>
        <h2>X</h2>
      </button>
      <ModalTitle>선택한 시설의 이름</ModalTitle>

      <img src={logo} alt="시설사진" />
      <ModalBody>
        {/* 클릭한 것의 값들이 들어오는 방법으르 모르겠어요 */}
        <div>시설 이름 :{shelterNm} </div>
        <div>시설 종류 : </div>
        <div>주소 : </div>
        <div>수용 가능 인원 : </div>
      </ModalBody>
    </ModalSection>
  );
};

const ModalSection = styled.div`
  // 모달 창 크기
  width: 400px;
  height: 550px;
  z-index: 999; // 모달 창 최상단으로 보이게 하는 코드

  // 모달 창 중앙 배치
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 모달 창 디자인
  // text-align: center;
  border-radius: 5px;
  background-color: ${PRIMARY_COLOR};
  color: ${COLOR_WHITE};
  padding: 20px;
  box-shadow: 0 18px 20px 0 grey;

  .close {
    // 닫기 버튼 우상단 배치
    position: absolute;
    top: 1.5%;
    right: 3%;

    // 닫기 버튼 디자인
    border-color: transparent;
    background-color: transparent;
    color: ${COLOR_WHITE};
  }
  img {
    padding: 50px;
    width: 300px;
    height: 300px;
  }
`;

const ModalTitle = styled.div`
  text-align: center;
  justify-content: top;
  font-size: 30px;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
`;
