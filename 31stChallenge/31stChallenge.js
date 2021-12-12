function gcd(a, b) {
  // Everything divides 0
  if (a == 0) return b;
  if (b == 0) return a;

  // base case
  if (a == b) return a;

  // a is greater
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}

const a = 2154;
const b = 458;

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));
