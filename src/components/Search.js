import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../constants";

const Search = ({ onSearchChange }) => {
  const [searchLocation, setSearchLocation] = useState("");

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        // console.log(city);
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };
  const onChangeHandler = (enteredLocation) => {
    // console.log(enteredLocation);
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
