import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../styles/color";

export const Footer = () => {
  return (
    <FooterSection>
      <div>
        © 2023 Alice Corp. All rights reserved.
        <br />
        엘리스에서 제공하는 자료는 공익목적으로만 사용해야하며 상업목적으로
        사용할 경우 저작권을 침해합니다
        <br />
        <br />
        <br />
        (주) 엘리스그룹 | 주소: 서울특별시 강남구 선릉로 433 (역삼동, 세방빌딩)
        6층, 16층
        <br />
        홈페이지운영/장애문의 : 전화 070-4633-4851 | 이메일 kdt@elice.io
        <br />
        <br />
        Alice 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단 사용 및
        도용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있음을 알려드립니다.
      </div>
    </FooterSection>
  );
};

const FooterSection = styled.div`
  font-weight: bold;
  font-size: 12px;
  padding: 30px;
  color: ${COLOR_WHITE};
  background-color: ${PRIMARY_COLOR};
`;
