import "./App.css";
import Search from "./components/Search";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import WeeklyWeather from "./components/WeeklyWeather";
import { useState } from "react";
import { WEATHER_API_URL, API_KEY } from "./constants";
import { getWithExpiry,setWithExpiry } from "./Utility/sessionStorage";

const TTL = 30* 60 * 1000; //Time To Live -> 30 min in milliseconds

function App() {
  const [currentConditions, setCurrentConditions] = useState({});
  const [weeklyConditions, setWeeklyConditions] = useState([]);
  const [location, SetLocation] = useState("");


  const fetchWeather = async (latitude, longitude, cacheKey) => {
    try {
      const weatherResponse = await fetch(
        `${WEATHER_API_URL} ${latitude},${longitude}${API_KEY}`
      );
      const weatherData = await weatherResponse.json();
      setCurrentConditions(weatherData?.days[0] || {});
      setWeeklyConditions(weatherData?.days || []);
      setWithExpiry(cacheKey, weatherData, TTL);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSearchChange = (enteredLocation) => {
    const [latitude, longitude] = enteredLocation.value.split(" ");
    SetLocation(enteredLocation.label);
    // console.log(latitude, longitude);

    let cacheKey = `cityData-${enteredLocation.label}`;
    const cachedCity = getWithExpiry(cacheKey);

    if (cachedCity) {
      // console.log(cacheKey);
      const weatherData = cachedCity;
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
            <div className="p-2 lg:w-1/2 ">
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
            <p> Please search for a location.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
