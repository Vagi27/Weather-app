import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../constants";

const Search = ({ location, setLocation }) => {
  const [searchLocation, setSearchLocation] = useState("");

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        console.log(city);
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };
  const onChangeHandler = (enteredLocation) => {
    setSearchLocation(enteredLocation);
  };
  return (
    // <div className="border border-black rounded-md p-2">
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchLocation}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
    // </div>
  );
};
export default Search;
