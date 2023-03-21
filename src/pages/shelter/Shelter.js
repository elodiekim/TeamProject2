import { ShelterMap, ShelterList } from "../../components/index.js";
import * as S from "./Shelter.style";


function Shelter() {


  return (
      <S.FlexContainer>
        <ShelterMap />
        <ShelterList />
      </S.FlexContainer>
  );
}

export default Shelter;
