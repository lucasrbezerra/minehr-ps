import ReactApexChart from "react-apexcharts";
import { Info } from "../components";
import styled, { useTheme } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  flex-basis: 48%;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const BarChart = () => {
  const theme = useTheme();

  const chartData = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        name: "Gastos em Dólar",
      },
    ],
    options: {
      title: {
        text: "Barras",
        margin: 16,
        offsetY: 16,
        style: {
          color: theme.colors.primary,
          fontFamily: theme.fontFamily,
          fontSize: "1.5rem",
        },
      },
      chart: {
        type: "bar",
        height: 500,
        fontFamily: theme.fontFamily,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
    },
  };

  return (
    <Wrapper>
      <Info onClick={() => console.log("Clicked Bar")}>
        <i className="fas fa-info"></i>
      </Info>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={chartData.options.chart.height}
      />
    </Wrapper>
  );
};
