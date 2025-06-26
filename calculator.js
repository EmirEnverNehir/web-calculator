 
const nums = document.querySelectorAll(".num");
const plus = document.getElementById("plus");
const answer = document.getElementById("answer");
const equal = document.getElementById("e");
const clear = document.getElementById("clear");
const minus = document.getElementById("minus");

 
let n1 = "";
let n2 = "";
let isSecond = false;
let operation = null;  

 
nums.forEach(btn => {
  btn.addEventListener('click', function() {
    const digit = this.textContent;
    
    
    if ((!isSecond && n1 === "0") || (isSecond && n2 === "0")) {
      return;
    }

    if (!isSecond) {
      n1 += digit;
      answer.textContent = n1;
    } else {
      n2 += digit;
      answer.textContent = n2;
    }
  });
});

 
plus.addEventListener('click', function() {
  if (n1 !== "") {
    isSecond = true;
    operation = "+";
    answer.textContent = "0"; 
  }
});
minus.addEventListener('click', function() {
  if (n1 !== "") {
    isSecond = true;
    operation = "-";
    answer.textContent = "0"; 
  }
});


 
equal.addEventListener('click', function() {
  if (n1 !== "" && n2 !== "" && operation) {
    let result;
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    
    switch(operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
       
      default:
        result = "Error";
    }
    
    answer.textContent = result;
    
   
    n1 = result.toString();
    n2 = "";
    isSecond = false;
    operation = null;
  } else {
    answer.textContent = "Error";
  }
});

 
clear.addEventListener('click', function() {
  n1 = "";
  n2 = "";
  isSecond = false;
  operation = null;
  answer.textContent = "0";
});

 
