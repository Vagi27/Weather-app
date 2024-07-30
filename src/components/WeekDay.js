import React from "react";
import { farenToCelcius } from "../Utility/utility";
import temperatureIcon from "../assets/temperature.png";
import cloudIcon from "../assets/cloud.png";
import windIcon from "../assets/wind.png";
import humidityIcon from "../assets/humidity.png";
const WeekDay = ({ day }) => {
  //   console.log(day);
  const condition = day?.conditions.split(",")[0];

  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date(day.datetime).getDay()];

  return (
    <div
      className="flex  m-1  rounded-md justify-between  text-xs sm:text-sm lg:text-base  "
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(171, 203, 222, 0.05) 100%)",
      }}
    >
      <div className="px-1 m-1 basis-1/3 text-start">
        <p> {dayOfWeek}</p>
        <p className="font-normal italic"> {condition}</p>
        {/* <div> {day?.datetime}</div> */}
      </div>

      <div className="px-1 m-1  basis-1/3 text-center  ">
        <div className="flex p-1 justify-center">
          <img className="w-4  mr-1 " src={temperatureIcon} alt=""></img>
          <p>{farenToCelcius(day?.temp)} °C</p>
        </div>
        <div className="flex px-1 justify-center">
          <img className="w-5 mr-1 " src={cloudIcon} alt=""></img>
          <p>{day?.cloudcover} % </p>
        </div>
      </div>

      <div className="px-1 m-1  basis-1/3 text-center  ">
        <div className="flex p-1 justify-center">
          <img className="w-4  mr-1 " src={windIcon} alt=""></img>
          <p>{day?.windspeed} km/h</p>
        </div>
        <div className="flex p-1 justify-center">
          <img className="w-4  mr-1 " src={humidityIcon} alt=""></img>
          <p>{day?.humidity} % </p>
        </div>
      </div>
    </div>
  );
};

export default WeekDay;
