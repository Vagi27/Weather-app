import "./App.css";
import Search from "./components/Search";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import WeeklyWeather from "./components/WeeklyWeather";
import { useState,useEffect } from "react";
import { WEATHER_API_URL, API_KEY } from "./constants";

function App() {
  const [currentConditions, setCurrentConditions] = useState({});
  const [weeklyConditions, setWeeklyConditions] = useState([]);
  const [location, SetLocation] = useState("");

  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  const fetchWeather = async (latitude, longitude, cacheKey) => {
    try {
      const weatherResponse = await fetch(
        `${WEATHER_API_URL} ${latitude},${longitude}${API_KEY}`
      );
      const weatherData = await weatherResponse.json();
      setCurrentConditions(weatherData?.days[0] || {});
      setWeeklyConditions(weatherData?.days || []);
      localStorage.setItem(cacheKey, JSON.stringify(weatherData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSearchChange = (enteredLocation) => {
    const [latitude, longitude] = enteredLocation.value.split(" ");
    SetLocation(enteredLocation.label);
    // console.log(latitude, longitude);

    let cacheKey = `cityData-${enteredLocation.label}`;
    const cachedCity = localStorage.getItem(cacheKey);

    if (cachedCity) {
      // console.log(cacheKey);
      const weatherData = JSON.parse(cachedCity);
      // console.log(weatherData);
      setCurrentConditions(weatherData?.days[0]);
      setWeeklyConditions(weatherData?.days);
      return;
    }
    fetchWeather(latitude, longitude, cacheKey);
  };

  const hasData =
    Object.keys(currentConditions).length > 0 && weeklyConditions.length > 0;

  return (
    <div className="flex justify-center min-h-fit ">
      <div className="   p-4  mx-0  w-full h-3/5 rounded-md md:mx-8 lg:w-[1100px] lg:mt-10 shadow-sm  shadow-gray-300 ">
        <Search onSearchChange={onSearchChange} />
        {hasData ? (
          <div className="flex flex-col mt-8 pt-4 justify-evenly lg:flex-row">
            <div className="p-2 lg:w-1/2 size-full">
              <TodayWeather
                conditions={currentConditions}
                location={location}
              />
            </div>
            <div className="p-2 lg:w-1/2 size-full">
              <WeeklyWeather weeklyConditions={weeklyConditions} />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full min-h-[550px]">
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
