![logo](https://github.com/arshad10x/JS-Challenger/assets/76579075/972111e0-152f-4f66-829b-36e154b764d3)


 <!-- ## Table of Contents

### A. JavaScript Basic

| No. | Questions|
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [Variables](#variables) |
| 2   | [Booleans](#booleans) |  
| 3   | [Operators](#Operators) |  
| 4   | [Strings](#strings) |  
| 5   | [Conditionals](#conditionals) |  
| 6   | [Functions](#functions) |  

### B. JavaScript DOM

| No. | Questions|
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [DOM Selector methods](#DOM-Selector-methods) |
| 2   | [Events and user interaction](#Events-and-user-interaction) |  
| 3   | [DOM manipulation](#DOM-manipulation) |  
| 4   | [DOM fundamentals](#DOM-fundamentals) |  
| 5   | [Recursive function](#Recursive-function) |  
   -->

 

## A. JavaScript Basic
<hr/>

### VARIABLES

1. ### Reassign a value to a variable
- Assign a new value to the variable num. The code will not work the way it is. Find the mistake and fix it. Execute the corrected code.

```javascript
let num = 1;
num = 2;
console.log(num);
```

### 2. Assign a value to a variable
- Here, we declare the variable num. But, it has no value yet. Assign a value to it and run the code.
```javascript
let num;
num = 1;
console.log(num);
```

### 3. Assign the value of another variable
- Here, we have two variables numOne and numTwo. numOne already has a value. Assign numTwo the value of numOne and run the code.

```javascript
let numOne;
let numTwo = numOne;
console.log(numTwo);
```
### 4. Create the missing variable
- Below, we attempt to assign the value of a variable named numOne to the variable numTwo. But, that variable has not been declared yet. Declare a variable named numOne and run the code.

```javascript
let numOne = 5;
let numTwo = numOne;
console.log(numTwo);
```
### 5. Accessing a variable (1)
- In this simple exercise we declare a variable called num and assign it a value of 5. Then we try to log the value of the variable using the console.log() method.
But, the console.log() method contains a small mistake. If you try to run the code, you will see an error message.
Fix the mistake and run the code again.
```javascript
const num = 5;
console.log(num);
```
### 6. Accessing a variable (2)
- This exercise is very similar to the previous one. We declare a variable called num, assign it a value of 5, and try to log it. But again, we introduced a small mistake.
Fix the code and run it.
```javascript
const num = 5;
console.log(num);
```
### 7. Declare a variable and assign a number

- In this exercise we practice how to declare a new variable and how to assign it a number. The console.log() statement below attempts to log a variable named num.
Declare a variable with this name and assign it a number of your choice. Run the code to see if the number is being logged.
```javascript
const num = 5;
console.log('The value of num is: ' + num);
```
### 8. Reassign a value to a variable (2)

- The code below first declares a variable named num with a string value hello. Then, a new value bye is assigned. Finally, the variable is logged.
But, the code will not work like that. Find the mistake and fix it. Execute the corrected code.
```javascript
let num = 1;
num = 2;
console.log(num);
```
<hr/>

**[⬆ Back to Top](#table-of-contents)**

### BOOLEANS
<hr/>

### 1. Assign boolean to a variable

- Here, we declare the variable isTrue. But, it has no value yet. Assign a boolean value to it and run the code.

```javascript
let isTrue;
isTrue = true;
console.log(isTrue);
```

### 2. Convert Number to Boolean

- Here, we declare the variable num and assign it the value 5. We also declare the variable bool which we assign the boolean representation of num.
Extend the code such that the console.log() statement logs false.


```javascript
let num = 5;
num = 0;
const bool = Boolean(bool);
console.log(bool);
```
<hr/>

**[⬆ Back to Top](#table-of-contents)**

### OPERATORS
<hr/>

### 1. Comparison operators - Equal

- In the console.log() statement below we use the Equal operator to check whether numOne and numTwo have the same value. Change the code so that the console.log() statement logs true.

```javascript
const numOne = 5;
const numTwo = 5;
console.log(numOne == numTwo);
```

### 2. Comparison operators - Not Equal

- In the console.log() statement below we use the Not Equal operator to check whether numOne and numTwo have different values. Change the code so that the console.log() statement logs true.
```javascript
const numOne = 5;
const numTwo = 6;
console.log(numOne != numTwo);
```


### 3. Comparison operators - Greater than


- In the console.log() statement below we use the Greater Than operator to check whether the value of numOne is greater than the value of numTwo. Change the code so that the console.log() statement logs true.

```javascript
onst numOne = 5;
const numTwo = 4;
console.log(numOne > numTwo);
```


### 4. Comparison operators - Less than


- In the console.log() statement below we use the Less Than operator to check whether the value of numOne is less than the value of numTwo. Change the code so that the console.log() statement logs true.
```javascript
const numOne = 1;
const numTwo = 2;
console.log(numOne < numTwo);
```


### 5. Comparison operators - Greater than or equal


- In the console.log() statement below we use the Greater Than Or Equal operator to check whether the value of numOne is greater than or equal the value of numTwo. It also checks whether the value of numTwo is greater than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.

```javascript
const numOne = 3;
const numTwo = 2;
const numThree = 2;
console.log(numOne >= numTwo, numTwo >= numThree);
```



### 6. Comparison operators - Less than or equal


- In the console.log() statement below we use the Less Than Or Equal operator to check whether the value of numOne is less than or equal the value of numTwo. It also checks whether the value of numTwo is less than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.


```javascript
const numOne = 1;
const numTwo = 1;
const numThree = 2;
console.log(numOne <= numTwo, numTwo <= numThree);
```
<hr/>

**[⬆ Back to Top](#table-of-contents)**

### STRINGS
<hr/>

### 1. Create a Javascript string

- In this exercise the existing console.log() statement logs the value of the variable text. The variable text has already been declared with an empty string – as indicated by the two single quotes.
Fill in the string with some characters and run the code to see if the string is being logged.

```javascript
const text = 'Arshad Ahmed';
console.log('The value of text is: ' + text);
```


### 2. Different ways to create Javascript strings

- Here, we have declared 3 variables textOne, textTwo, and textThree. An empty string is assigned to all of them.
Do you see how in each case different symbols are used to create the string? All three of them are valid methods to create a JavaScript string.
Fill in all 3 strings with some characters and run the code to see if the values get logged.

```javascript
const textOne = 'welcome to, ';
const textTwo = "JSChallenger ";
const textThree = `Repo`;
console.log(textOne, textTwo, textThree);
```

### 3. Connect Javascript strings (1)

- After we have learnt how to create JavaScript strings, we will now connect 2 strings together. In the code below we use the Addition (+) operator to concatenate textOne and textTwo. The console.log() statement logs the resulting string. Currently, the result would be HelloWorld.
Change the code below so that the value of res is Hello World

```javascript
const textOne = 'Hello';
const textTwo = 'World';
const combined = textOne + ' ' + textTwo;
console.log(combined);
```

<hr/>

**[⬆ Back to Top](#table-of-contents)**

### CONDITIONALS
<hr/>

### 1. if statement - satisfy condition


- The code will assign the variable num a new value 1. But it will only run if the condition is met.
Adjust the condition such that the code inside the curly braces will execute and the console.log() statement logs true.

```javascript
let num = 0;
if (1 < 2) {
   num = 1;
}
console.log(num === 1);
```

### 2. if statement - add missing condition

- Time to practice what we've learnt so far. In the code below, the if...statement will assign a new value to the variable text. But only if its condition is met. Currently, the condition is missing.
Add any condition that will be satisfied such that the console.log() statement logs true.

```javascript
let text = 'hello';
if (text === 'hello') {
   text = text + ' world';
}
console.log(text === 'hello world');
```
<hr/>

**[⬆ Back to Top](#table-of-contents)**

### FUNCTIONS
<hr/>

### 1. Function declaration

- In this exercise we create a function called func. Then we call the function and assign its return value to the variable result. To solve this exercise, simply have the console.log() statement log the words hello world.


```javascript
function func() {
   return 'hello world';
};
const result = func();
console.log(result);
```

### 2. Function expression

- In the code below, we introduced a small mistake when calling the function func. Find the mistake and run the code to see if the words hello world are correctly logged.



```javascript
function func() {
   return 'hello world';
};
const result = func();
console.log(result);
```

### 3. Correctly return value from function (1)

- In this exercise, we create a function func. Then, we call func and assign its return value to the variable result.
When you run the code like this, you see that the value undefined is logged. This is the current return value of func because we do not explicitly define a return value ourselves.
Let func return the value of the variable text.


```javascript
const func = function() {
   let text = 'hello';
   text = text + ' world';
   return text;
};
const result = func();
console.log(result);
```

### 4. Correctly return value from function (2)

- In this exercise func declares a variable text with the value hello. Then it returns the value of text. After that, it assigns a new value hello world to the variable text and returns the new value.
But, when you run the code, you see that only the initial value of text (hello) is logged.
Adjust the code so that the final value of text is logged.


```javascript
const func = function () {
   let text = 'hello';
   text = text + ' world';
   return text;b
};
const result = func();
console.log(result);
```
<hr/>

**[⬆ Back to Top](#table-of-contents)**

## B. JavaScript DOM

### DOM Selector methods

### 1. Select the button element on the page

- In this scenario, the existing code adds an eventListener for a click event on a variable buttonElem. It expects buttonElem to be the button element in the example UI. But, that element is not selected yet.
Assign the button element to the variable buttonElem. Click the button to verify that the code is working.
Hint: Make use of the unique id of the button element.

```javascript

  const buttonElem = document.getElementById("button");
  
  buttonElem.addEventListener('click', () => {
    const oldText = buttonElem.innerText;
    return button.innerText = oldText === "ON" ? "OFF" : "ON";
  });

```
**[⬆ Back to Top](#table-of-contents)**

### 2. Query descendent HTML elements

- Here, the existing code expects the variables 'buttonElem' and 'inputElem' to represent the button and input elements in the example UI.
Assign the respective elements to the variables.
In this case, the two elements do not have unique identifiers - like for example an id. Instead they are direct descendents of a div element with id 'wrapper'. Use an appropriate selector method!
Click the button to verify that the code is working.

```javascript
const buttonElem = document.querySelector("#wrapper button");
  const inputElem = document.querySelector("#wrapper input");
  
  buttonElem.addEventListener('click', () => {
    const oldText = inputElem.value;
      return inputElem.value = oldText === "ON" ? "OFF" : "ON";
  });
```
**[⬆ Back to Top](#table-of-contents)**

### 3. Select multiple HTML elements

- In this scenario, we are looking for a list of elements gathered in one variable - rather than only one element.
Assign the list items in the view to the variable 'listItems' by using an appropriate selector method.
Once you have completed the code below, verify it by hovering over the list items until all items have the value 'ON'.

```javascript
 const listItems = document.querySelectorAll("#list li");
  
  const handleHover = (event) => {
    return event.target.innerText = 'ON';
  };
  
  if(listItems.length > 1) {
    listItems.forEach(item => item.addEventListener('mouseover', handleHover));
  }
```

<hr/>

**[⬆ Back to Top](#table-of-contents)**

## Events and user interaction

<hr/>

### 1. Execute function on button click

- The Javascript function handleText fills the input field with the words Hello World. But, there is no code to execute this function.
Complete the existing code below such that the function is called when the button is clicked. Verify by clicking the button.

```javascript

 
  const button = document.getElementById('button');
  const input = document.getElementById('input');
  
  const handleClick = () => {
    input.value = 'Hello World';
  };
  
  button.addEventListener('click', handleClick);

```

### 2 Execute function on button click

- The Javascript function changeText changes the text inside the circle. But again, there is no code to execute this function.
Complete the existing code below such that the function is called when the cursor moves onto the circle. Verify that your code works by hovering over the circle.

```javascript
const element = document.getElementById('element');
  
  const changeText = () => {
    element.innerText = 'Thanks!';
  };
  
  element.addEventListener("mouseover", changeText);
```

### 3 Cursor enters and leaves element

- In this scenario we want the color of the circle to change depending on the type of cursor movement. Use the function toggleColor to turn the circle orange when the cursor moves onto it. Reuse the same function to turn it black when the cursor leaves it.
The tricky part is that you have to call toggleColor with different values for the parameter isEntering. Verify that your code is working by hovering the circle with the mouse cursor and leaving it again.

```javascript
  const element = document.querySelector('#element');
  
  const toggleColor = (isEntering) => {
    element.style.background = isEntering ? 'orange' : 'black';
  };
  
  element.addEventListener('mouseover', () => toggleColor(true));
  element.addEventListener('mouseleave', () => toggleColor(false));
```

<hr/>

**[⬆ Back to Top](#table-of-contents)**

### DOM manipulation

### 1. Remove element from the DOM

- You may not see it in the example UI, but underneath the red circle is a green circle. Extend the function removeRedCircle to remove the circle with id red from the DOM.
Make sure that you really remove the element instead of just hiding it. Confirm that your code works by clicking the button.

```javascript

 const button = document.querySelector('#button');
  
  const removeRedCircle = () => {
    const redCircle = document.querySelector('#red');
    redCircle.parentNode.removeChild(redCircle);
  };

```
### 2. Change id of HTML element

- In this scenario the existing code listens to a click on the button. When the button is clicked, the function changeInput is triggered. changeInput tries to select an input field with id inputEl. But, the existing input field does not have this id. Add some Javascript code to add the id inputEl to the existing input field.
Verify that your code works by clicking the button.


```javascript
  const button = document.querySelector('#wrapper button');
  
  const changeInput = () => {
    const input = document.querySelector('#inputEl');
    if(input) {
      input.value = 'Hello World';
    }
  };
  
  button.addEventListener('click', changeInput);
  
  document.querySelector('#wrapper input').setAttribute('id', 'inputEl');
```

**[⬆ Back to Top](#table-of-contents)**

<hr/>

### DOM fundamentals

### 1. Check the checkbox

- Your first JavaScript DOM exercise. Let's start simple.
Extend the JavaScript code below to interact with the displayed HTML elements. Once you click the button, the checkbox should be checked.
Confirm your code by clicking the button!

```javascript

   const button = document.getElementById('button');
  button.addEventListener('click', () => {
    const checkbox = document.getElementById('checkbox');
    checkbox.checked = true;
  });

```

### 1. Get full-name from inputs

- Extend the JavaScript code below to interact with the displayed HTML elements.
This time we are looking for the full name. When the button is clicked, combine the names of the first two input fields. Insert the full name in the third input field.
Hint: Check if your code still works if you change the first or last name.
Confirm your code by clicking the button!

```javascript

 
  const button = document.getElementById('button');
  button.addEventListener('click' , () => {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const fullName = document.getElementById('fullName');
    fullName.value = firstName.value + ' ' + lastName.value;
  });
```
<hr/>

## Recursive function

### 1. Stop and restart the moving button

- This is a good exercise to learn about recursive functions. The function move in the code below moves the button 1px to the left or the right. It is recursive because it calls itself again and again. This keeps the button moving.
Extend the JavaScript code. Once you click the button, it should stop moving. When you click it again, it should move again.
Confirm your code by clicking the button twice.

```javascript

  const button = document.getElementById('button');
  let stopped = false;
   
  function move(isReturning) {
   const width = button.parentNode.clientWidth;
   const left = parseInt(button.style.left , 10) || 0;
   if (!stopped) {
      button.style.left = (isReturning ? left - 1 : left + 1) + 'px';
      setTimeout(() => move ((isReturning && left > 0) || left === width - button.clientWidth), 10);
   };
  };
   
  move();
   
  button.addEventListener('click', () => {
    stopped = !stopped;
    move();
  });
```
**[⬆ Back to Top](#table-of-contents)**
