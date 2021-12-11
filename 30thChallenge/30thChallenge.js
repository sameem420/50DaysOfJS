function factorial(n) {
  let fact = 1;
  while (n >= 1) {
    fact *= n;
    n--;
  }
  return fact;
}

console.log("The factorial of " + n + " is " + factorial(5));
