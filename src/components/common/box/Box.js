import * as S from "./Box.style";
import { Link } from "react-router-dom";

export const Box = ({ boxImage, boxLink, LinkName, boxTitle, boxText }) => {
  return (
    <S.BoxSection>
      <div className="BoxList">
        <div className="Box">
          <img src={boxImage} alt="사진이 올 장소" />
          <h3>
            <Link to={boxLink} className="text-link" target="_blank">
              {LinkName}
            </Link>
          </h3>
          <h3 className="title">{boxTitle}</h3>
          <div>
            {boxText.split("\n").map((text, index) => (
              <pre key={index}>{text}</pre>
            ))}
          </div>
          {/* <div>{boxText}</div> */}
        </div>
      </div>
    </S.BoxSection>
  );
};
