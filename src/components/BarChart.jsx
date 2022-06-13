import { useContext } from "react";
import styled, { useTheme } from "styled-components";
import ReactApexChart from "react-apexcharts";
import { ChartsContext } from "../contexts";
import { Info } from "../components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  flex-basis: 48%;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  tspan {
    fill: ${({ theme }) => theme.colors.text};
  }
`;

export const BarChart = () => {
  const theme = useTheme();
  const { barData } = useContext(ChartsContext);

  const chartData = {
    series: barData.series,
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
        categories: barData.categories,
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
