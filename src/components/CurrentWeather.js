import React from "react";
const CurrentWeather = ({ currentConditions }) => {
  console.log(currentConditions);
  return (
    <React.Fragment>
      <div className=" ">
        <p className=" text-center text-sm font-bold ">CURRENT WEATHER</p>
        <div>
          <p>{currentConditions?.feelslike}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CurrentWeather;
