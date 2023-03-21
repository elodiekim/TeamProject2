import { ReactComponent as Seoul } from "../../../src/asset/Seoul_districts.svg";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../../styles/color";

//svg파일 가져와서 바로 styled컴포넌트 () 안에 넣음.
export const StyledSeoul = styled(Seoul)`
  width: 700px;
  height: 700px;

  path:hover {
    fill: ${PRIMARY_COLOR};
  }
`;
