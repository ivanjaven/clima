import { CiTempHigh } from "react-icons/ci";

const WeatherDetail = ({ imageSource, data, description }) => {
  return (
    <div className=" flex flex-row align-middle mt-3 ml-0 mb-6 mr-0">
      <div className=" h-9 mr-6">{imageSource}</div>
      <div className="flex flex-col">
        <h1 className=" text-lg m-0 font-extrabold">{`${data}`}</h1>
        <p className=" text-lg m-0 translate-y-1">{description}</p>
      </div>
    </div>
  );
};

export default WeatherDetail;
