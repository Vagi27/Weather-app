import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../constants";

const fetchAndSetList = async (inputValue, cacheKey) => {
  const citiesList = await fetchCities(inputValue);

  const options = citiesList.data.map((city) => {
    return {
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.countryCode}`,
    };
  });

  const expiryTime = Date.now() + 5000; // Cache for 5 seconds for testing
  localStorage.removeItem(cacheKey);
  const item = { options: options, expiry: expiryTime };
  localStorage.setItem(cacheKey, JSON.stringify(item));

  return { options };
};

const loadOptions = async (inputValue) => {
  const cacheKey = `citiesList-${inputValue}`;
  const cachedCityList = JSON.parse(localStorage.getItem(cacheKey));
  console.log(cachedCityList);
  // const cachedCityExpiry = localStorage.getItem(`${cacheKey}-expiry`);

  const currentTime = Date.now();
  console.log(cachedCityList);

  // if (cachedCityList && parseInt(cachedCityExpiry, 10) > currentTime) {
  if (cachedCityList && cachedCityList.expiry > currentTime) {
    console.log("Accessing local storage");
    return {
      options: JSON.parse(cachedCityList.options),
    };
  } else {
    console.log("Cache expired or not found, fetching new data");
    // localStorage.removeItem(cacheKey);
    // localStorage.removeItem(`${cacheKey}-expiry`);
    return await fetchAndSetList(inputValue, cacheKey);
  }
};

const Search = ({ onSearchChange }) => {
  const [searchLocation, setSearchLocation] = useState("");

  const onChangeHandler = (enteredLocation) => {
    setSearchLocation(enteredLocation);
    onSearchChange(enteredLocation);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={300}
      value={searchLocation}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
