import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const Map = styled.div`
display: flex;
align-self: center;
width: 360px;
height: 400px;
background: ${COLOR_WHITE};
margin: 10px;
padding: 20px;
border-radius: 20px;
border-style: solid;
border-color: ${PRIMARY_COLOR};
border-width:10px;
button{
  background-color: ${PRIMARY_COLOR};
  color: ${COLOR_WHITE};
  border-radius:30px;
  border:none;
}
button:hover {
  background-color: orange;
  color: ${COLOR_WHITE};

`;
