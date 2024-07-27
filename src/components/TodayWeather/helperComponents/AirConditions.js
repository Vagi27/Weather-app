import React from "react";
import { farenToCelcius } from "../../../Utility/utility";

import temperatureIcon from "../../../assets/temperature.png";
import cloudIcon from "../../../assets/cloud.png";
import windIcon from "../../../assets/wind.png";
import humidityIcon from "../../../assets/humidity.png";

const AirConditions = ({ conditions }) => {
  // console.log(conditions);
  const { feelslike, windspeed, cloudcover, humidity } = conditions;
  return (
    <div className="mb-6">
      <p className="text-center text-base font-bold">AIR CONDITIONS </p>
      <div className=" mt-4 items-center font-semibold sm:text-base text-xs text-center grid grid-cols-4 gap-2 justify-evenly">
        <div className="flex flex-col  items-center">
          <img className=" w-4" src={temperatureIcon} alt=""></img>
          <p>Feels Like</p>
          <p>{farenToCelcius(feelslike)}°C</p>
        </div>
        <div className="flex flex-col  items-center">
          <img className="w-4 " src={windIcon} alt=""></img>
          <p>Wind</p>
          <p>{windspeed}Km/h</p>
        </div>
        <div className="flex flex-col  items-center">
          <img className=" w-4" src={cloudIcon} alt=""></img>
          <p>Clouds</p>
          <p>{cloudcover} %</p>
        </div>
        <div className="flex flex-col  items-center">
          <img className=" w-4" src={humidityIcon} alt=""></img>
          <p>Humidity</p>
          <p>{humidity} %</p>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
