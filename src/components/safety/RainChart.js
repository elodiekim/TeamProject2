import { useRain } from "../../hooks/useRain";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { COLOR_WHITE } from "../../styles/color";

export const RainChart = () => {
  const { rain } = useRain();

  return (
    <>
      <div className="chartTitle">강우량 현황</div>
      <div className="chartBack">
        {/* TODO: x축 이름 검은색으로 변경 */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={rain}
            margin={{
              top: 20,
              right: 40,
              left: 20,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* stroke: 실선 색 변경 */}
            <XAxis stroke={COLOR_WHITE} dataKey="union_district" />
            <YAxis stroke={COLOR_WHITE} domain={[0, 0.25]} />
            <Tooltip />
            <Legend />
            {/* stackId: 누적 bar만들어줌 */}
            <Bar
              name="7월"
              dataKey="July"
              stackId="a"
              barSize={65}
              fill="#8884d8"
            />
            <Bar
              name="8월"
              dataKey="August"
              stackId="a"
              barSize={65}
              fill="#82ca9d"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
