import { BarChart, ScatterChart, Navbar, Container, Content, Header } from "../components";

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Header />
        <BarChart />
        <ScatterChart />
      </Content>
    </Container>
  );
};
