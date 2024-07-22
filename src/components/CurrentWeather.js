import React from "react";
const CurrentWeather = ({ currentConditions }) => {
  console.log(currentConditions);
  return (
    <React.Fragment>
      <div>
        current weather:
        <p>{currentConditions?.feelslike}</p>
      </div>
    </React.Fragment>
  );
};
export default CurrentWeather;
