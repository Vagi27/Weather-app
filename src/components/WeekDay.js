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
    <div className="flex  m-1 border border-black rounded-md justify-between  text-xs sm:text-sm lg:text-base ">
      <div className="p-1 m-1 basis-1/3 text-start">
        <p> {dayOfWeek}</p>
        <p className="font-normal"> {condition}</p>
        {/* <div> {day?.datetime}</div> */}
      </div>

      <div className="p-1 m-1  basis-1/3 text-center  ">
        <div className="flex p-1 justify-center">
          <img className="w-4  mr-1 " src={temperatureIcon}></img>
          <p>{farenToCelcius(day?.temp)} °C</p>
        </div>
        <div className="flex p-1 justify-center">
          <img className="w-4  mr-1 " src={windIcon}></img>
          <p>{day?.cloudcover} % </p>
        </div>
      </div>

      <div className="p-1 m-1  basis-1/3 text-center  ">
        <div className="flex p-1 justify-center">
          <img className="w-4  mr-1 " src={windIcon}></img>
          <p>{day?.windspeed} km/h</p>
        </div>
        <div className="flex p-1 justify-center">
          <img className="w-4  mr-1 " src={humidityIcon}></img>
          <p>{day?.humidity} % </p>
        </div>
      </div>
    </div>
  );
};

export default WeekDay;
