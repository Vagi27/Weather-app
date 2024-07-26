import React from "react";
import {farenToCelcius} from "../Utility/utility"
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
    <div className="flex  m-1 border border-black rounded-md justify-between  text-base ">
      <div className="p-1 m-1 basis-1/3 text-start">
        <div> {dayOfWeek}</div>
        <div className="text-sm"> {condition}</div>
        {/* <div> {day?.datetime}</div> */}
      </div>
      <div className="p-1 m-1  basis-1/3 text-center ">
        <div>{farenToCelcius(day?.temp)}°C</div>
        <div>{day?.cloudcover}%</div>
      </div>
      <div className="p-1 m-1  basis-1/3 text-center ">
        <div>{day?.windspeed} km/h</div>
        <div>{day?.humidity}%</div>
      </div>
    </div>
  );
};

export default WeekDay;
