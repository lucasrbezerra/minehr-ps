import styled from 'styled-components';

export const Info = styled.button`
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