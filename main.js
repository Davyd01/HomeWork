

// function min (a , b ) {
//   if (a > b) {
//     return b
//   } else {
//     return a
//   }
// }

// let num1 = Number(prompt("Enter a number"))
// let num2 = Number(prompt("Enter a number"))

// let result = min(num1, num2)

// console.log("Less number is", result)


// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x
//   }
//   return result;
// }

// console.log(pow(2, 3));



function removeChar(str, charsToRemove) {
  let result = '';

  for (let char of str) {
    if (!charsToRemove.includes(char)) {
      result += char
    }
  }
  return result
}

console.log(removeChar("hhhwwwooo", ['h', 'o']))