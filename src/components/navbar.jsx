import ClimaLogo from "../img/Clima Light Mode Logo.png";
import { GoSun } from "react-icons/go";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar_logo" src={ClimaLogo} alt="Clima Logo" />
      <div className="mode_logo">
        <GoSun className="sun" size="2.8rem" />
      </div>
    </div>
  );
};

export default NavBar;
