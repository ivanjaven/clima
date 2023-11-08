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

export { getUserLocation };
