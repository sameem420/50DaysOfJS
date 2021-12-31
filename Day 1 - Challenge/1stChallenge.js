function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return ~~(Math.random() * (rangeEnd - rangeStart) + rangeStart);
}

// Instead of Math.floor() we can use double telda ~~ symbol for conversion

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
