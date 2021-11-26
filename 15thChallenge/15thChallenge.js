function hey(message) {
  let bobResponse = "";
  switch (message) {
    case "How are you?":
      bobResponse = "Sure.";
      break;
    case "YELL":
      bobResponse = "Whoa, chill out!";
      break;
    case "YELL???":
      bobResponse = "Calm down, I know what I'm doing!";
      break;
    case "":
      bobResponse = "Fine. Be that way!";
      break;
    default:
      bobResponse = "Whatever.";
  }
  return bobResponse;
}

console.log(hey("YELL"));
console.log(hey("How are you?"));
