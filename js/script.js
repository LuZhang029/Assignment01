//STEP 1
let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let myLibraryFunction;

//STEP 2
var a = 0.33; // a numeric literal expression
alert('Today is Valentine Day.'); // a string literal expression
true; // a Boolean literal expression
null; // a null literal expression

//STEP 3
 //complex expression
   let firstName = "Lu";
   let greeting = 'Hi, ${name}! Have a sweet day!';  // using the template literal
 // variable expression
   let a = 2;
   let b = 3;
   let sum = a + b; 

//STEP 4
let firstName; // camel Case
let lastName; // camel Case
let strAddress; // Hungarian Notation
let strCity; // Hungarian Notation
let strState; // Hungarian Notation
let strZipCode; // Hungarian Notation
let intYourAge; // Hungarian Notation
let referralSource; // camel Case
let boolMayWeContactYou; // Hungarian Notation

//STEP 5
let firstName = "Lu";
let strZipCode = 92122;
let boolMayWeContactYou = true;

//STEP 6
let result = 10 + " apples";  // JavaScript coerces 10 into a string and concatenates
console.log(result);  // Output: "10 apples"

//STEP 7
 // Boolean + String
 let firstResult = true + " is the answer";
 console.log(firstResult);  // Output: "true is the answer"

 // Number + Boolean
 let secondResult = 10 + true;
 console.log(secondResult);  // Output: 11

//STEP 8
  // It is invalid because it uses both single quotes and double quotes without proper escaping or an alternative string delimiter. 
  // Using template literals could fix it.
     let someString = `Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."`;
     console.log(someString);
  // Escape the apostrophe in "I'm" could also fix it.
     let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
     console.log(someString);

//STEP 9
 // Variable with a null value
  let nullValue = null;
  console.log(nullValue);  

// Variable with an undefined value
  let undefinedValue;
  console.log(undefinedValue); 

//STEP 10
console.log(typeof "Hello, world!");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof {name: "Alice"});
console.log(typeof undefined);

//STEP 11
let myName = "Lu Zhang";
alert("Hello " + myName + ", welcome to the JavaScript class!");

//STEP 12
let name = "Lu Zhang";
alert("Hello " + name + ", welcome to the JavaScript class!");

//STEP 13
let name = "Lu Zhang";
let course = "JavaScript";
alert("Hello " + name + ", welcome to the" + course + " class!");

//STEP 14
let name = "Lu Zhang";
let course = "JavaScript";
alert("Hello " + name + ".\nWelcome to the" + course + " class!"); // the \n escape sequence creates a new line before "welcome"

//STEP 15
let name = prompt("What is your name?"); 
let course = "JavaScript";
alert("Hello " + name + ".\nWelcome to the " + course + " class!");

//STEP 16
let name = prompt("What is your name?"); 
let course = prompt("What class are you taking?");
alert("Hello " + name + ".\nWelcome to the " + course + " class!");

//STEP 17
let x = 10;
let y = 20;
let sum = x + y;
console.log(sum); 

//STEP 18
let x = 20; 
x += 20; // Add 20 to x (equivalent to x = x + 20)
console.log(x);  

//STEP 19
let x = 20; 
x *= 5; // Multiply x by 5 (equivalent to x = x * 5)
console.log(x); 

//STEP 20
let x = 20 % 3;  // modulus operator gives the reminder
console.log(x); 

//STEP 21
let x = 10;
let y = 5;
let z = 20;
let result = (x > y) && (z > x) && (x + y === 15); 
  //&& is the logical and operator ensures all conditions must be true for the entire expression to be true.
console.log(result); 

//STEP 22
let a = 10;
let b = 20;
let c = 25;
let result = (a <= b) || (c === 30) || (b !== a); 
  // || is the logical or operator ensures that if at least one condition is true, the result will be true.
console.log(result);