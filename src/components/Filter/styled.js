import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
`;

export const Title = styled.h4`
  font-weight: 600;
  padding: 0.5rem 0;
`;
