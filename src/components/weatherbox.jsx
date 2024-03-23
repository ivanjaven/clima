import { BiSolidMap } from "react-icons/bi";

const WeatherBox = ({ current, location }) => {
  return (
    <>
      <div className="bg-cover bg-center bg-morning bg-no-repeat h-screen max-h-96 w-420 mx-14 my-6 rounded-3xl">
        <div className="weatherbox_header flex my-10">
          <div className="weatherbox_header--logo mx-4 my-2">
            <img src={current.condition.icon} />
          </div>
          <div>
            <h1 className="font-semibold text-3xl font-poppins">
              Weather Today
            </h1>
            <div className="location flex my-2">
              <BiSolidMap className="map-logo h-6" size={"2rem"} />
              <p className="font-poppins mx-2 text-md">{`${location.name}, ${location.region}`}</p>
            </div>
          </div>
        </div>
        <div className="current_temp mx-8 my-5">
          <h1 className="font-poppins font-semibold text-5xl">{`${current.temp_c}°C`}</h1>
          <p className="font-poppins font-normal mt-2">
            {current.condition.text}
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherBox;
