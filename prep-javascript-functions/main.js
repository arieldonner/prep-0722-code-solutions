function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hoursAsMinutes = convertHoursToMinutes(2);
console.log('Minutes: ', hoursAsMinutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var hello = getGreeting('World');
console.log('Greeting: ', hello);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyResult = addAndMultiplyBy5(10, 5);
console.log('Add and Multiply Result: ', addAndMultiplyResult);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('Multiply and Divide Result: ', multiplyAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractResult = subtractTwoNumbers(22, 7);
console.log('Subtraction Result:', subtractResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('Circumference: ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('Full Name: ', fullName);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('Cube: ', cubeResult);
