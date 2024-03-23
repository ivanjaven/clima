import ClimaLogo from "../img/Clima Light Mode Logo.png";
import { GoSun } from "react-icons/go";

const NavBar = () => {
  return (
    <div className="navbar flex justify-between">
      <img
        className="navbar_logo max-h-16 mx-8 my-4 flex-shrink-0"
        src={ClimaLogo}
        alt="Clima Logo"
      />
      <div className="mode_logo content-center my-4 flex-shrink-0 mx-10">
        <GoSun className="sun" size="30" />
      </div>
    </div>
  );
};

export default NavBar;
