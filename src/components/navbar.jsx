import ClimaLogo from "../img/Clima Light Mode Logo.png";

const NavBar = () => {
  return (
    <div className="navbar flex justify-between">
      <img
        className="max-h-14 mx-4 my-2 flex-shrink-0 sm:max-h-16 sm:mx-6 sm:mt-4 xl:max-h-20"
        src={ClimaLogo}
        alt="Clima Logo"
      />
    </div>
  );
};

export default NavBar;
