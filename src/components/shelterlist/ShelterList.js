import * as S from "./ShelterList.style";
import ModalButton from "./ModalButton"
import { useShelter } from "../../hooks";

export const ShelterList = () => {
  const {shelter} =useShelter();
  console.log({shelter})

  //임시데이터
  const gu_category = [
    {id: 1,
      guNm: "강남구"
    },
    {id: 2,
      guNm: "강동구"
    },
    {id: 3,
      guNm: "강북구"
    },
    {id: 4,
      guNm: "강서구"
    },
    {id: 5,
      guNm: "관악구"
    },
  ]

  return (<>
    <S.ListTable>
      
      <S.Table>
        <table >
          <thead className="table-head">
            <tr>
              <td>
                <select name="gu" className="select">
                  <option disabled selected>서울시 00구</option>
                  {gu_category.map((gu_category)=>(
                    <option value={gu_category.guNm}>{gu_category.guNm}</option>
                  ))}
                </select>
              </td>
              <td>시설 이름</td>
              <td>시설 종류</td>
              <td>시설 주소</td>
              <td>수용 인원</td>
            </tr>
          </thead>
          <tbody className="table-body" >
              {shelter
              // .filter(shelter=> shelter.shelterNm.includes('강남구'))
              .map((shelter)=>(
                <tr key={shelter.id}>
                  <td className="gu-name">{shelter.guNm}</td>
                  <td className="shelter-name"><ModalButton shelter={shelter.shelterNm}></ModalButton></td>
                  {/* shelter이름을 클릭하면 모달 창이 뜨는데 클릭한 이름의 id에 해당하는 값들을 모달 창에 전달하고싶어요 */}
                  <td className="shelter-type">{shelter.shelterType}</td>
                  <td className="shelter-address">{shelter.address}</td>
                  <td className="shelter-qty">{shelter.qty}명</td>
                </tr>
              ))}
          </tbody>
        </table>
      </S.Table>
      
    </S.ListTable>
    </>
  );
};
