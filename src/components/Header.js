import styled from "styled-components";
import { Link } from "react-router-dom";
import { ROUTE } from "../routes/Route";
import { PRIMARY_COLOR, COLOR_WHITE } from "../styles/color";
import logo from "../asset/반딧불이_logo.png";

export const Header = () => {
  return (
    <HeaderSection>
      <div className="wrapper">
        <Link to={ROUTE.LANDING_PAGE.link} className="title">
          <img src={logo} alt="f사이트로고" />
        </Link>
        <ul className="menu">
          <Link to={ROUTE.SHELTER_PAGE.link}>
            <li>반딧불 찾기</li>
          </Link>
          <Link to={ROUTE.PLUS_PAGE.link}>
            <li>반딧불 더하기</li>
          </Link>
          <Link to={ROUTE.SAFETY_PAGE.link}>
            <li>반딧불 알리미</li>
          </Link>
          <Link to={ROUTE.CREATEPOST_PAGE.link}>
            <li>반딧불 이야기</li>
          </Link>
        </ul>
      </div>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: ${PRIMARY_COLOR};
  padding: 5px 30px;
  background-color: ${COLOR_WHITE};
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
  }

  img {
    width: 100px;
  }

  .menu {
    list-style: none;
    display: flex;
  }
  .menu li {
    margin-right: 30px;
  }
  a {
    text-decoration: none;
    color: ${PRIMARY_COLOR};
  }
`;

export default Header;
