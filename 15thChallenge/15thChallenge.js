function hey(message) {
  let bobResponse = "";
  if (message === "How are you?") {
    bobResponse = "Sure.";
  } else if (message === "YELL") {
    bobResponse = "Whoa, chill out!";
  } else if (message === "YELL???") {
    bobResponse = "Calm down, I know what I'm doing!";
  } else if (message === "") {
    bobResponse = "Fine.";
  } else if (message === "") {
    bobResponse = "Fine. Be that way!";
  } else {
    bobResponse = "Whatever.";
  }
  return bobResponse;
}

console.log(hey("How are you?"));
