import { useContext } from "react";
import styled, { useTheme } from "styled-components";
import ReactApexChart from "react-apexcharts";
import { Info } from "../components";
import { ChartsContext } from "../contexts";

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

export const ScatterChart = () => {
  const theme = useTheme();
  const { scatterData } = useContext(ChartsContext);

  const chartData = {
    series: scatterData.series,
    options: {
      title: {
        text: "Scatter",
        margin: 16,
        offsetY: 16,
        style: {
          color: theme.colors.primary,
          fontFamily: theme.fontFamily,
          fontSize: "1.5rem",
        },
      },
      chart: {
        height: 500,
        type: "scatter",
        foreColor: theme.colors.text,
        zoom: {
          enabled: true,
          type: "xy",
        },
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(1);
          },
        },
      },
      yaxis: {
        tickAmount: 7,
      },
    },
  };

  return (
    <Wrapper>
      <Info onClick={() => console.log("Clicked Scatter")}>
        <i className="fas fa-info"></i>
      </Info>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="scatter"
        height={chartData.options.chart.height}
      />
    </Wrapper>
  );
};
