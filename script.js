//         task 01

let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
let fullName = firstName + " " +  lastName ;
document.write(`<center><h1><u>Task 01</u></h1></center><br>`)
document.write(`<center><h2>Hello ${fullName} "!"</h2></center><hr>`);

// task 02

let  favoritePhoneModel = prompt("Please enter your favorite mobile phone model:");
let inputLength = favoritePhoneModel.length;
document.write(`<center><h1><u>Task 02</u></h1></center><br>`)
document.write(`<center><h2>Your favorite mobile phone model is ${favoritePhoneModel.toUpperCase()} and its length is ${inputLength} characters.</h2></center><hr>`);

// task 03

let word = "Pakistani";
let letter = "n";
let index = word.indexOf(letter);

document.write(`<center><h1><u>Task 03</u></h1></center><br>`);
document.write(`<center><h2>The index of the letter "${letter}" in the word "${word}" is ${index}.</h2></center><hr>`);

// task 04

let words = "Hello World";
let letters = "l";
let lastIndex = word.lastIndexOf(letter);

document.write(`<center><h1><u>Task 04 </u></h1></center><br>`);
document.write(`<center><h2>The last index of the letter "${letters}" in the word "${words}" is ${lastIndex}.</h2></center><hr>`);

// task 05

let word1 = "Pakistani";
let index1 = 3;
let character = word.charAt(index1);

document.write(`<center><h1><u>Task 05</u></h1></center><br>`);
document.write(`<center><h2>String : ${word1}</h2></center>`);

document.write(`<center><h2>Character at index ${index1} : ${character}.</h2></center><hr>`);

// task 06

document.write(`<center><h1><u>Task 06</u></h1></center><br>`);

let fullNames= firstName.concat(" ", lastName);
document.write(`<center><h2>String Method</h2></center><br>`)
document.write(`<center><h2>Hello ${fullNames.concat(" ")} "!"</h2></center><hr>`);

// task 07

document.write(`<center><h1><u>Task 07</u></h1></center><br>`);
let hyd = "Hyderabad";
let rep = hyd.replace("Hydera", "Islama");
document.write(`<center><h2>City : ${hyd}</h2></center>`);
document.write(`<center><h2>After replacement : ${rep}</h2></center><hr>`);

// task 08

let  message = "Ali and Sami are best friends. They play cricket and football together.";
let updatedMessage = message.replace(/and/g, "&");

document.write(`<center><h1><u>Task 08</u></h1></center><br>`);
document.write(`<center><h2>Original Message: ${message}</h2></center>`);
document.write(`<center><h2>Updated Message: ${updatedMessage}</h2></center><hr>`);

// task 09

document.write(`<center><h1><u>Task 09</u></h1></center><br>`);
let value = "472";
let number = Number(value);
document.write(`<center><h2>Value: ${value} <br> Type: ${typeof value} <BR> Value: ${number} <br> Type: ${typeof number} </h2></center><hr>`);

// task 10

document.write(`<center><h1><u>Task 10</u></h1></center><br>`);
let userinput = "peanut";
document.write(`<center><h2>user input: ${userinput} <br> Uppercase: ${userinput.toUpperCase()}</h2></center><hr>`);

// task 11

document.write(`<center><h1><u>Task 12</u></h1></center><br>`);
let userInput = "javascript";
let firstLetterUppercase = userInput.charAt(0).toUpperCase();
let restLettersLowercase = userInput.slice(1).toLowerCase();
let result = firstLetterUppercase + restLettersLowercase;
document.write(`<center><h2>User input: ${userInput} <br> Title case: ${result}</h2></center><hr>`);

// task 12

document.write(`<center><h1><u>Task 12</u></h1></center><br>`);

let num = 35.36;
let numAsString = num.toString();
let numWithoutDot = numAsString.replace(".", "");
document.write(`<center><h2>Number: ${num} <br> String:  ${numWithoutDot}.</h2></center><hr>`);

// task 13

document.write(`<center><h1><u>Task 13</u></h1></center><br>`);


let username = prompt("Please enter your username:");
let specialSymbols = ["@", ".", ",", "!"];
let isValidUsername = true;

for (let i = 0; i < specialSymbols.length; i++) {
  if (username.includes(specialSymbols[i])) {
    isValidUsername = false;
    break;
  }
}

if (!isValidUsername) {
  alert("Username contains special symbols. Please enter a valid username.");
  username = prompt("Please enter your username:");
document.write(`<center><h2>Username : ${username}</h2></center><hr>`);

}

document.write(`<center><h2>Username : ${username}</h2></center><hr>`);


// task 14

document.write(`<center><h1><u>Task 14</u></h1></center><br>`);

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userSearch = prompt("Please enter the item you want to search for: \n Avalaible: \n cake \n apple pie \n cookie \n chips \n patties");
userSearch = userSearch.toLowerCase();
if (A.includes(userSearch)) {
document.write(`<center><h2>The ${userSearch} is found in the list.</h2></center><hr>`);

} else {
document.write(`<center><h2>The ${userSearch} is not found in the list.</h2></center><hr>`);

}

// task 15

document.write(`<center><h1><u>Task 15</u></h1></center><br>`);

let password = prompt("Please enter your password:");

while (true) {
  if (/^[a-zA-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 6) {
    break;
  } else {
    password = prompt("Invalid password. Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
  }
}

document.write(`<center><h2>Your password is: ${password}</h2></center><hr>`);

// task 16

document.write(`<center><h1><u>Task 16</u></h1></center><br>`);

let university = "University of Karachi";
let universityArray = university.split(" ");

document.write(`<center><h2>String: ${university}</h2></center>`);
document.write(`<center><h2>Array: ${universityArray}</h2></center>`);

for (let i = 0; i < universityArray.length; i++) {
  document.write(`<center><h2>Element ${i + 1}: ${universityArray[i]}</h2></center>`);
}
document.write(`<hr>`);

// task 17

document.write(`<center><h1><u>Task 17</u></h1></center><br>`);
let user_Input = "pakistan";
let last_Index = user_Input.length -1;
let lastCharacter = user_Input.charAt(last_Index);

document.write(`<center><h2>User Input: ${user_Input}</h2></center>`);
document.write(`<center><h2>Last character: ${lastCharacter}</h2></center><hr>`);

// task 18

document.write(`<center><h1><u>Task 18</u></h1></center><br>`);

let str = "The quick brown fox jumps over the lazy dog";
let Word = "the";
let count = 0;
let Words = str.split(" ");

for (let i = 0; i < Words.length; i++) {
  if (Words[i].toLowerCase() === Word) {
    count++;
  }
}

document.write(`<center><h2>The number of occurrences of the word "${Word}" in the string "${str}" is ${count}.</h2></center><hr>`);

