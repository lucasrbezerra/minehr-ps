import { useContext } from "react";
import { SettingsContext } from "../../contexts";
import { WrapperNavbar, Logo, Toggler } from "./styled";

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
