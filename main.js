//Task #1
function printHello() {
    console.log("Hello, World!");
    console.log("Hello, World!");
    console.log("Hello, World!");
  }
  
  printHello();

  //Task #14
  function findGreatest(num1, num2, num3) {
    let greatest = num1; 
  
    
    if (num2 > greatest) {
      greatest = num2;
    }
  
 
    if (num3 > greatest) {
      greatest = num3;
    }
  
    return greatest;
  }

  let num1 = 53656;
let num2 = 356356;
let num3 = 63563;

let greatest = findGreatest(num1, num2, num3);
console.log("The greatest number is: " + greatest);

// Task #4
function greetPerson(name) {
    return "Hi, " + name + "!";
  }
  let name = "Professor Adai";
  let greeting = greetPerson(name);
  console.log(greeting);  
  