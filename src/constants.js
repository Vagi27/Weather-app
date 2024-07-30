export const WEATHER_API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
export const API_KEY = "?key=XETQGN5JBLQZT6XQT4JZLMYA9";

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "fdea0a0472mshd3028b32a972f48p199729jsn7de6cbbf3f62",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

export async function fetchCities(inputValue) {
  const geoResponse = await fetch(
    `${GEO_API_URL}?namePrefix=${inputValue}`,
    GEO_API_OPTIONS
  );
  const geoData = await geoResponse.json();
  return geoData;
}
