# Write a function which can convert the time input given in 12 hours format to 24 hours format

- ### The check for 'AM' and 'PM' can be verified using endsWith String method
- ### An extra 0 would be needed if the hours have single digit

# TEST CASES

| TEST                            | RESULT          |
| ------------------------------- | --------------- |
| convertTo24HrsFormat("12:10AM") | returns "00:10" |
| convertTo24HrsFormat("5:00AM")  | returns "05:00" |
| convertTo24HrsFormat("12:33PM") | returns "12:33" |
| convertTo24HrsFormat("01:59PM") | returns "13:59" |
