const number = "+919876543210";

function validateMobile(number) {
  number = number.replace(/(\s|-)/g, "");
  const numberValidator = new RegExp(
    /^(((\+?\(91\))|0|((00|\+)?91))-?)?[7-9]\d{9}$/
  );
  return numberValidator.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
