import styled from "styled-components";
import { useContext } from "react";
import { SettingsContext } from "../contexts";

const WrapperNavbar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
`;

const Logo = styled.img`
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

export const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useContext(SettingsContext);

  const icon = isDarkTheme ? (
    <i className="fas fa-moon"></i>
  ) : (
    <i className="fas fa-sun"></i>
  );

  const logo = isDarkTheme ? "/logo.png" : "/logo.webp";

  return (
    <WrapperNavbar>
      <Logo src={logo} alt="MINEHR" />
      <Toggler onClick={toggleTheme}>{icon}</Toggler>
    </WrapperNavbar>
  );
};
