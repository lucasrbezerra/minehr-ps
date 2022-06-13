import ReactApexChart from "react-apexcharts";
import { Wrapper } from "./styled";
import { Info } from "..";

export const Chart = ({ type, chartData, infoText }) => {
  return (
    <Wrapper>
      <Info text={infoText} />
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type={type}
        height={chartData.options.chart.height}
      />
    </Wrapper>
  );
};
