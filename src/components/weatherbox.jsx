import { BiSolidMap } from "react-icons/bi";

const WeatherBox = ({ current, location }) => {
  return (
    <div className="bg-cover bg-center bg-morning bg-no-repeat h-96 w-12/12 my-6 rounded-3xl pt-4 mx-8 sm:mx-32 md:mx-40 lg:w-420 lg:mx-14 xl:mx-12">
      <div className="flex my-10">
        <div className="mx-4 my-2">
          <img src={current.condition.icon} />
        </div>
        <div>
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-3xl">
            Weather Today
          </h1>
          <div className="flex my-2">
            <BiSolidMap className="map-logo h-6" size={"2rem"} />
            <p className="mx-2 text-sm sm:text-lg">{`${location.name}, ${location.region}`}</p>
          </div>
        </div>
      </div>
      <div className="mx-8 my-5">
        <h1 className="font-semibold text-4xl sm:text-5xl">{`${current.temp_c}°C`}</h1>
        <p className="font-normal mt-2 md:text-lg">{current.condition.text}</p>
      </div>
    </div>
  );
};

export default WeatherBox;
