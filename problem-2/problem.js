//problem number: 2
// Write a function that takes two arguments: a number and a maximum limit. The function should check if the number is odd or even, and print the result. If the number exceeds the maximum limit, it should print an error message.
function OddEvenNumberChecker(num, max) {
  if (num > max) {
    console.log("Error: Number is greater than maximum limit!");
    return;
  }
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}
OddEvenNumberChecker(9, 20);