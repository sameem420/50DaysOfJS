const str = "F(X) !== G(X) !== F(X)";

function getTheGapX(str) {
  let firstXPosition = str.indexOf("X");
  let lastXPosition = str.lastIndexOf("X");
  let count = 0;
  for (let i = firstXPosition; i < lastXPosition; i++) {
    count++;
  }
  if (!str.includes("X")) {
    count = -1;
  }
  return count;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
