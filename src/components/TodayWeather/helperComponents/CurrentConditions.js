import React from "react";
import { farenToCelcius } from "../../../Utility/utility";

const CurrentConditions = ({ todayConditions, location }) => {
  const { datetime, temp, conditions, icon } = todayConditions;
  const expected = conditions.split(",")[0];
  // console.log(location);

  return (
    <div className="mb-6">
      <p className="text-center text-sm font-bold">CURRENT WEATHER</p>
      <div className="flex mt-4   font-semibold justify-around">
        <div className="p-2 ">
          <p>{location}</p>
          <p> {datetime}</p>
        </div>

        <div className="p-2">
          <p> {farenToCelcius(temp)}°C</p>
          <p>{expected}</p>
        </div>
        <div className=" grid p-2  place-items-center">
          <p>{icon} icon</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentConditions;
