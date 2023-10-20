"use strict";

var input = document.getElementById('input'); 
var number = document.querySelectorAll('.numbers div');
var operator = document.querySelectorAll('.operators div'); 
var result = document.getElementById('result'); 
var clear = document.getElementById('clear'); 

var resultDisplayed = false;

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
     
    } else if (resultDisplayed === true && (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷")) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
      
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
      
    }
  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      console.log("enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}

result.addEventListener("click", function() {
  var inputString = input.innerHTML;
  var numbers = inputString.split(/\+|\-|\×|\÷/g);
  var operators = inputString.match(/[\+\-\×\÷]/g);

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  for (var i = 0; i < operators.length; i++) {
    if (operators[i] === "÷") {
      numbers[i] = parseFloat(numbers[i]) / parseFloat(numbers[i + 1]);
    } else if (operators[i] === "×") {
      numbers[i] = parseFloat(numbers[i]) * parseFloat(numbers[i + 1]);
    } else if (operators[i] === "-") {
      numbers[i] = parseFloat(numbers[i]) - parseFloat(numbers[i + 1]);
    } else if (operators[i] === "+") {
      numbers[i] = parseFloat(numbers[i]) + parseFloat(numbers[i + 1]);
    }
  }

  input.innerHTML = numbers[0];
  resultDisplayed = true;
});

clear.addEventListener("click", function() {
  input.innerHTML = "";
});
