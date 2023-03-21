import styled from "styled-components";
import { COLOR_WHITE } from "../../styles/color";

export const PlusList = styled.div`
  display: grid;
  align-items: center;
  gap: -10px;
  height: 650px;
  background-color: ${COLOR_WHITE};
  .nameList {
    display: flex;
    justify-content: center;
  }
  .BoxList {
    display: flex;
    justify-content: center;
  }
`;
