function wave(str) {
  let waveArray = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === " ") {
      continue;
    } else {
      waveArray.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
    }
  }
  return waveArray;
}

console.log(wave("hello"));
