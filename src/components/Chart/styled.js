import styled from "styled-components";

export const Wrapper = styled.div`
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
