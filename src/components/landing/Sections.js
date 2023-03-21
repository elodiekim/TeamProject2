import * as S from "./Sections.style";
import { Box } from "../common/box";
import background from "../../asset/background.jpg";
import { SeoulMap } from "../seoulmap";
import shelter from "../../../src/asset/반딧불찾기.png";
import plus from "../../../src/asset/반딧불더하기.png";
import safety from "../../../src/asset/반딧불알리미.png";

const Sections = () => {
  return (
    <>
      <S.PictureSection>
        <div>
          <img className="picture" src={background} alt="family" />
        </div>
      </S.PictureSection>
      <S.BodySection1>
        <div className="textList">
          <h1>잠시동안 따뜻한 쉼터로 안내합니다.</h1>
          <div>반딧불이는 이재민 분들을 위해 쉼터의 위치와 정보를 제공합니다. </div>
        </div>
      </S.BodySection1>
      <S.BodySection2>
        <div className="nameList">
          <div className="name">반딧불이 이용법</div>
        </div>
        <div className="BoxList">
          <Box
            boxImage={shelter}
            boxTitle="반딧불 찾기"
            boxText={"각 구에 해당하는 수용시설의 위치,\n수용인원 등을 조회할 수 있습니다."}
          />
          <Box boxImage={plus} boxTitle="반딧불 더하기" boxText={"이재민분들을 위한 관련 사이트를\n안내해줍니다."} />
          <Box
            boxImage={safety}
            boxTitle="반딧불 알리미"
            boxText={"최근 재난 발생 현황을 나타내고,\n이에 따른 안전도를 표시합니다."}
          />
        </div>
      </S.BodySection2>
      <S.BodySection3>
        <div className="center3">
          <div>
            <SeoulMap />
          </div>
        </div>
      </S.BodySection3>
    </>
  );
};

export default Sections;
