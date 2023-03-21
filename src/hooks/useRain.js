import { useState, useEffect } from "react";
import { fetchRain } from "../api";

export function useRain() {
  const [rain, setRain] = useState([]);

  async function _fetchRain() {
    try {
      const rain = await fetchRain();
      setRain(rain);
    } catch (err) {
      console.log("error", err);
    }
  }

  // api는 axios로 관련 data들을 가져오는 것 까지가 역할
  // hook은 api로 가져온 data를 사용하는 로직..?

  // useEffect 내부에서는 async await 함수를 사용할 수 없기에
  // _fetchRain 같이 async 함수를 따로 만들어서
  // useEffect 에서 사용한다.
  // ** useEffect 는 항상 함수를 반환해야함 그래서 async await을 잘못쓰면 프로미스 객체를 반환하게 되어 에러가 난다. **
  useEffect(() => {
    _fetchRain();
  }, []);

  return { rain };
}
