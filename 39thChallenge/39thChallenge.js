const flavours = {
  "Pure Strawberry Joy": 0.5,
  Energizer: 1.5,
  "Green Garden": 1.5,
  "Tropical Island": 3,
  "All or Nothing": 5,
  Others: 2.5,
};

const Limes = {
  small: 6,
  medium: 8,
  large: 10,
};

const timeToMixJuice = (name) => {
  if (flavours[name]) return flavours[name];
  else return flavours["Others"];
};

const limesToCut = (wedgesNeeded, limes) => {
  let cuts = 0;
  while (wedgesNeeded > 0 && limes.length > 0) {
    const lime = limes.shift();
    switch (lime) {
      case "large":
        wedgesNeeded -= 10;
        break;
      case "medium":
        wedgesNeeded -= 8;
        break;
      default:
        wedgesNeeded -= 6;
        break;
    }
    cuts++;
  }
  return cuts;
};

const remainingOrders = (timeLeft, orders) => {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
};

console.log(timeToMixJuice("Tropical Island"));
console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));
console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
);
