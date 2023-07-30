// 1. SUM OF TWO NUMBER - Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result

function myFunction (a,b){
    return a + b;
}
myFunction(2,3);

// 2. COMPARISION OPERATOR, STRICT EQUALITY - Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

function myFunction(a, b) {
    return a === b;
  }


  // 3. Get type of value - Write a function that takes a value as argument. Return the type of the value.

  function myFunction(a) {
    return typeof a;
 }

 // 4. Get nth character of string - Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

 function myFunction(a, n) {
    return a[n - 1];
 }

 // 5. Remove first n characters of string - Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

//  function myFunction(a) {
//     return a.slice(3);
//  }

 // 6. Get last n characters of string - Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

 function myFunction(str){
    return str.slice(-3) 
 }

 // 7. Get first n characters of string - Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result


 function myFunction(a) {
    return a.slice(0, 3);
 }

 // 8. Find the position of one string in another - Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.

 function myFunction(a) {
    return a.indexOf('is');
 }

 // 9. Extract first half of string - Write a function that takes a string (a) as argument. Extract the first half a. Return the result

 function myFunction(a) {
    return a.slice(0, a.length / 2);
 }

 // 10. Remove last n characters of string - Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

 function myFunction(a){
    return a.slice(0, a.lenght -3)
}
// OR

function myFunction(a){
    return a.slice(0, -3)
}

// 11. Return the percentage of a number - Write a function that takes two numbers (a and b) as argument. Return b percent of a

function
myFunction(a, b)
{
return b /100 *a;
}

// 12. Basic JavaScript math operators - Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.

function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }

//  13. Check whether a string contains another string and concatenate - Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
