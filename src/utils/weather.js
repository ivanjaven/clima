const getWeatherForecast = async (place) => {
  const apiKey = "9c59f50cdcd3420b87f04537230111";
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=8&aqi=yes&alerts=yes`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.error("Failed to fetch weather data");
    }
  } catch (error) {
    console.error("An error occurred while fetching weather data:", error);
  }
};

// const

export { getWeatherForecast };
