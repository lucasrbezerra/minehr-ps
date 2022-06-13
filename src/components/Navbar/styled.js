import styled from "styled-components";

export const WrapperNavbar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.img`
  width: 120px;
  margin-left: 1rem;
  height: auto;
`;

export const Toggler = styled.button`
  color: ${({ theme }) => theme.colors.background};
  background-color: transparent;
  transition: all 0.2s;
  border: none;
  outline: none;
  font-size: 1.6rem;
  margin-right: 1rem;
  cursor: pointer;
`;
