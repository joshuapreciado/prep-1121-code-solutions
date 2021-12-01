function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return 60 * hours;

}
var test = convertHoursToMinutes();
console.log('', test);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var test1 = getGreeting('Josh');
console.log('getGreetingResult:', test1);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var Multiplyby5 = addAndMultiplyBy5(5);
console.log('', Multiplyby5);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var test2 = multiplyAndDivideBy5(5);
console.log('', test2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var test3 = subtractTwoNumbers();
console.log('subtractTwoNumbers', test3);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var test4 = getCircleCircumference(7);
console.log('getCircleCircumferenceResult:', test4);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var test5 = getFullName();
console.log('', '', test5);
function cube(number) {
  return number * number * number;
}
var test6 = cube(3);
console.log('', test6);
