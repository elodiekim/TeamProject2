import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../../styles/color";

export const BoxSection = styled.div`
  .BoxList {
    display: flex;
    justify-content: center;
  }
  .Box {
    width: 200px;
    height: 400px;
    // background-color: ${COLOR_WHITE};
    color: ${PRIMARY_COLOR};
    margin: 20px;
    padding: 20px;
    border-radius: 30px;
    border-style: solid;
    border-color: ${PRIMARY_COLOR};
    border-width: 10px;
    background-color: ${(props) => props.backColor || COLOR_WHITE};
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }
  .text-link {
    color: inherit;
    text-decoration: inherit;
    display: flex;
    justify-content: center;
  }
  .title {
    color: inherit;
    text-decoration: inherit;
    display: flex;
    justify-content: center;
  }
`;
