import "./App.css";
import Search from "./components/Search";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import WeeklyWeather from "./components/WeeklyWeather";
import { useState } from "react";
import { WEATHER_API_URL, API_KEY } from "./constants";

function App() {
  // const [location, setLocation] = useState("");
  const [currentConditions, setCurrentConditions] = useState({});
  const [weeklyConditions, setWeeklyConditions] = useState([]);
  const [location, SetLocation] = useState("");

  const onSearchChange = (enteredLocation) => {
    // console.log(enteredLocation);

    const [latitude, longitude] = enteredLocation.value.split(" ");
    SetLocation(enteredLocation.label);
    // console.log(latitude, longitude);

    try {
      async function getWeather() {
        const weatherResponse = await fetch(
          `${WEATHER_API_URL} ${latitude},${longitude}${API_KEY}`
        );

        const weatherData = await weatherResponse.json();
        setCurrentConditions(weatherData?.days[0] || null);
        setWeeklyConditions(weatherData?.days || []);
        // console.log(weatherData);
      }
      getWeather();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const hasData =
    Object.keys(currentConditions).length > 0 && weeklyConditions.length > 0;

  return (
    <div className="flex justify-center">
      <div className="border border-black p-4 mt-10 w-3/5 h-3/5 rounded-md ">
        <Search onSearchChange={onSearchChange} />
        {hasData ? (
          <div className="flex pt-4 justify-evenly">
            <div className="p-2 w-1/2">
              <TodayWeather
                conditions={currentConditions}
                location={location}
              />
            </div>
            <div className="p-2 w-1/2">
              <WeeklyWeather weeklyConditions={weeklyConditions} />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p>No weather data available. Please search for a location.</p>
          </div>
        )}
      </div>
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
