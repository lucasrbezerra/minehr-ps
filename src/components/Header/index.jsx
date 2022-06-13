import { Wrapper, TextWrapper, Title, Subtitle, Filter } from "./styled";

export const Header = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>Dashboard</Title>
        <Subtitle>Desafio Técnico Frontend</Subtitle>
      </TextWrapper>
      <Filter onClick={() => console.log("Set Filter")}>
        <i className="fas fa-filter"></i>
        Filtrar
      </Filter>
    </Wrapper>
  );
};
