const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function parseDate(str) {
  var mdy = str.split("/");
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function getDaysBetweenDates(dateText1, dateText2) {
  return Math.round(
    (parseDate(dateText2) - parseDate(dateText1)) / (1000 * 60 * 60 * 24)
  );
}

console.log(
  `Days difference: ${getDaysBetweenDates("11/10/2021", "11/12/2021")}`
);
