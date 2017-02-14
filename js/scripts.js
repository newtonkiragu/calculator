var calculate = function(whatToSay) {
  alert(whatToSay);
};
alert("first number")
var number1 = parseFloat(prompt("insert a number"))
alert("second number")
var number2 = parseFloat(prompt("insert another number"))
var add = function(number1, number2) {
  return number1 + number2;
};
var result = add(number1, number2);
var outputText = "The sum is " + result + ".";
calculate(outputText);
