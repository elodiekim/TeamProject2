import * as S from "./ChartWrapper.style";
import { RainChart, FireChart, ShelterChart } from "./index";

export const ChartWrapper = () => {
  return (
    <S.ChartSection>
      <RainChart />
      <FireChart />
      <ShelterChart />
    </S.ChartSection>
  );
};
