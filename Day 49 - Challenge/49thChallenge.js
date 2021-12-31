function isTriangle(a, b, c) {
  if (a + b > c) {
    if (b + c > a) {
      if (a + c > b) return true;
    }
  }
  return false;
}

console.log(isTriangle(1, 2, 2));
