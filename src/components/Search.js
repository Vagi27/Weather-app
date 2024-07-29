import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../constants";

const loadOptions = async (inputValue) => {
  console.log(inputValue);
  let cacheKey = `citiesList-${inputValue}`;
  const cachedCityList = localStorage.getItem(cacheKey);

  if (cachedCityList) {
    return {
      options: JSON.parse(cachedCityList),
    };
  }

  const citiesList = await fetchCities(inputValue);

  const options = citiesList.data.map((city) => {
    // console.log(city);
    return {
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.countryCode}`,
    };
  });

  localStorage.setItem(cacheKey, JSON.stringify(options));

  return { options };
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
