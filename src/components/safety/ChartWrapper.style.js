import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const ChartSection = styled.div`
  margin: 20px 0 80px 0;
  /* width: 100%; */
  /* height: 550px; */

  .chartTitle {
    margin: auto;
    margin-top: 60px;

    text-align: center;
    font-size: 32px;
    color: ${COLOR_WHITE};
    padding-top: 10px;

    width: 238px;
    height: 50px;

    background: ${PRIMARY_COLOR};
    border-radius: 2010px;
  }

  .chartBack {
    text-align: center;
    color: ${COLOR_WHITE};

    margin: auto;
    margin-top: 25px;
    display: block;
    padding-top: 30px;

    width: 1000px;
    height: 500px;
    background: ${PRIMARY_COLOR};
    border-radius: 10px;
  }
`;
