function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;

}
var test = convertHoursToMinutes(2);
console.log('', test);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}
var test1 = getGreeting('Josh');
console.log('getGreetingResult:', test1);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}
var Multiplyby5 = addAndMultiplyBy5(10, 5);
console.log('', Multiplyby5);

function multiplyAndDivideBy5(num1, num2) {
  var result = num1 * num2 / 5;
  return result;
}
var test2 = multiplyAndDivideBy5(35, 10);
console.log('', test2);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}
var test3 = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers', test3);

function getCircleCircumference(radius) {
  var result = (2 * Math.PI) * radius;
  return result;
}
var test4 = getCircleCircumference(5);
console.log('getCircleCircumferenceResult:', test4);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}
var test5 = getFullName('Juan', 'Ramirez');
console.log('', '', test5);

function cube(number) {
  var result = number * number * number;
  return result;
}
var test6 = cube(5);
console.log('cubed:', test6);
