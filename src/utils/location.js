//This function returns a Promise
const getUserLocation = async () => {
  const getCoordinates = (position) => {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = `${latitude}, ${longitude}`;
    return coords;
  };

  if (navigator.geolocation) {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return getCoordinates(position);
  } else {
    throw new Error("Geolocation is not available in this browser.");
  }
};

const getLocationReccomendations = async () => {
  const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf56c78786msh57d23e7119a5c8cp15abaejsndfb9f5ce62d6",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
  } catch (error) {
    console.error(error);
  }
};

export { getUserLocation, getLocationReccomendations };
