import { useContext } from "react";
import { Chart, Navbar, Container, Content, Header } from "../components";
import { useTheme } from "styled-components";
import { ChartsContext } from "../contexts";

export const Home = () => {
  const theme = useTheme();

  const { barData, scatterData } = useContext(ChartsContext);

  const barChartSettings = {
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

  const scatterChartSettings = {
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
    <Container>
      <Navbar />
      <Content>
        <Header />
        <Chart
          type="bar"
          chartData={barChartSettings}
          infoText="O gráfico de barras a seguir mostra a média salarial (Eixo X) em reais (R$) 
      de servidores do estado de Minas Gerais e suas profissões (Eixo Y)."
        />
        <Chart
          type="scatter"
          chartData={scatterChartSettings}
          infoText="O gráfico scatter a seguir mostra os salários (Eixo Y) dos servidores 
      de Minas Gerais em relação a carga horária (Eixo X) de sua profissão."
        />
      </Content>
    </Container>
  );
};
