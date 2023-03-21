import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  padding-bottom: 120px;
  background-color: ${COLOR_WHITE};
`;

export const Category1 = styled.div`
  background-color: ${COLOR_WHITE};
  // background-color: red;

  display: flex;
  justify-content: flex-end;
  padding: 0 140px 5px 140px;
  button {
    color: ${COLOR_WHITE};
    background-color: ${PRIMARY_COLOR};
    width: 60px;
    height: 30px;
    margin-top: auto;
    margin-right: 3px;
    font-size: 13px;
    border: none;
    border-radius: 10px;
  }
  button:hover {
    background-color: ${COLOR_WHITE};
    color: ${PRIMARY_COLOR};
    border: solid;
    border-color: ${PRIMARY_COLOR};
  }
`;
// export const Category2 = styled.div`
// background-color: ${COLOR_WHITE};
// // background-color: red;

// display: flex;
// justify-content: flex-end;
// padding-right: 140px;
// padding-left: 140px;
// button {
//   color: ${COLOR_WHITE};
//   background-color: ${PRIMARY_COLOR};
//   width: 60px;
//   height: 30px;
//   margin-top: auto;
//   margin-right: 3px;
//   font-size: 13px;
//   border: none;
//   border-radius: 10px;
// }
// `
