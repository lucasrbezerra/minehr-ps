import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`;

export const Title = styled.h1`
  display: block;
  margin-left: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.p`
  display: block;
  margin-left: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  color: white;
  outline: none;
  border: none;
  margin-right: 1rem;
  & > i {
    margin-right: 0.5rem;
  }
  transition: all 0.2s ease-in;
  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;
