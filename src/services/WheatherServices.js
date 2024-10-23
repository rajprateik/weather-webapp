import axios from "axios";

const API_KEY = "1635890035cbba097fd5c26c8ea672a1"; // API Key
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

export const getWeatherForecast = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const dailyForecasts = response.data.list.filter(
      (item, index) => index % 8 === 0
    );
    return dailyForecasts;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
