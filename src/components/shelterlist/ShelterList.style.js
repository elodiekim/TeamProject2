import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const ListTable = styled.div`
  // display: flex;
  align-self: center;
  width: 700px;
  height: 440px;
  background: ${COLOR_WHITE};
  margin: 10px;
  // padding: 20px;
  border-radius: 20px;
  border-style: solid;
  border-color: ${PRIMARY_COLOR};
  border-width: 10px;
`;

export const Table = styled.div`
  text-align: center;
  color: ${PRIMARY_COLOR};
  background-color: ${COLOR_WHITE};
  border-color: ${PRIMARY_COLOR};
  width: 700px;
  height: 100%;
  display: block;
  overflow: scroll;

  table {
    border-collapse: collapse;
    font-size: 13px;
    width: 700px;
  }
  .table-head {
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
  }
  .select {
    vertical-align: middle;
    text-align: center;
    background-color: ${PRIMARY_COLOR};
    color: ${COLOR_WHITE};
  }
  .table-body {
    height: 500px;
  }
  .gu-name {
    width: 70px;
  }
  .shelter-name {
    width: 200px;
  }
  .shelter-type {
    width: 100px;
  }
  .shelter-address {
    width: 500px
  }
  .shelter-qty {
    width: 70px;
  }
`;
