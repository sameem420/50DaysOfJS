const time = "11:8AM";

function convertTo24HrsFormat(time) {
  let [hours, rest] = time.split(":");
  let modifier = "",
    minutes = "";
  rest.endsWith("PM") ? (modifier = "PM") : (modifier = "AM");
  rest = rest.split("");
  rest.length < 4 ? rest.unshift(0) : rest;
  minutes = rest[0] + rest[1];

  minutes.length === 1 ? (minutes = "0" + minutes) : minutes;

  hours.toString().length === 1 ? (hours = "0" + hours) : hours;

  hours === "12" ? (hours = "00") : hours;

  modifier === "PM" ? (hours = parseInt(hours, 10) + 12) : hours;

  return `${hours}:${minutes}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
