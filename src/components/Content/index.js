import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 968px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
`;