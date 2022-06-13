import styled from "styled-components";

export const Wrapper = styled.div``;

export const InfoButton = styled.button`
  position: absolute;
  left: 9rem;
  top: 2.4rem;
  width: 1.5rem;
  height: 1.5rem;
  outline: none;
  border: none;
  border-radius: 50%;
  z-index: 10;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  max-width: 22rem;
  color: ${({ theme }) => theme.colors.text};
`;
