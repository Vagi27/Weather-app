import "./App.css";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import WeeklyWeather from "./components/WeeklyWeather";
import { useEffect, useState } from "react";
import { WEATHER_API_URL, API_KEY } from "./constants";

function App() {
  // const [location, setLocation] = useState("");
  const [currentConditions, setCurrentConditions] = useState({});
  const [WeeklyConditions, setWeeklyConditions] = useState([]);

  const onSearchChange = (enteredLocation) => {
    const [latitude, longitude] = enteredLocation.value.split(" ");
    console.log(latitude, longitude);
    try {
      async function getWeather() {
        const weatherResponse = await fetch(
          `${WEATHER_API_URL} ${latitude},${longitude}${API_KEY}`
        );

        const weatherData = await weatherResponse.json();
        setCurrentConditions(weatherData.currentConditions);
        setWeeklyConditions(weatherData.days);

        console.log(weatherData);
        // console.log(geoData);
      }
      getWeather();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     if (location) {
  //     }
  //   }, 600);

  //   return () => {
  //     clearInterval(handler);
  //   };
  // }, [location]);

  return (
    <div className="flex justify-center">
      <div className="border border-black p-4 mt-10 w-3/5 h-3/5 rounded-md ">
        <Search onSearchChange={onSearchChange} />
        <div className="flex justify-between">
          <CurrentWeather currentConditions={currentConditions} />
          <WeeklyWeather WeeklyConditions={WeeklyConditions} />
        </div>
      </div>
      {/* <h1>Api:{location}</h1> */}
    </div>
  );
}

export default App;

/* 
- app component:
  - Search location
    - input box
    - dropdown suggestion box
    - some fixed locations(not ideally )
    - filtering of location in drop down as search continues
    - (Api call only when selected from drop down)
    - delay of some ms in making api call 
    - caching of searched locations
    - 
  - current weather
  - weekly forecast
*/
