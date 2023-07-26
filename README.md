# JS Challenger Solution

### Variable
<hr/>

### 1. Reassign a value to a variable
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

### Booleans
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

### Operators
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

### String
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
const textOne = 'welcome to, ';
const textTwo = "JSChallenger ";
const textThree = `Repo`;
console.log(textOne, textTwo, textThree);
```