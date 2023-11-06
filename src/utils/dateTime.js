export function convertUnixTimeToFormattedDate(unixTimestamp) {
  // Convert Unix timestamp to milliseconds
  const date = new Date(unixTimestamp * 1000);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[date.getDay()];
  const dayNumber = date.getDate();
  const month = months[date.getMonth()];

  const formattedDate = `${day}, ${month} ${dayNumber} `;

  return formattedDate;
}
