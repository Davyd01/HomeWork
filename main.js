// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
//   if(i % 2 === 0) {
//     console.log(i)
//   }
// }

// let sum = 0
// for (let i = 1; i <= 100; i++) {
//   sum += i
// }
// console.log(sum)


// function square(number) {
//   return number * number
// }

// console.log(square(4))


// function calculate(num1, num2, operator) {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     if (num2 === 0) {
//       return "Деление на ноль невозможно";
//     } else {
//       return num1 / num2;
//     }
//   } else {
//     return "Неверный оператор";
//   }
// }

// // Примеры использования
// console.log(calculate(10, 5, "+")); // Вывод: 15
// console.log(calculate(10, 5, "-")); // Вывод: 5
// console.log(calculate(10, 5, "*")); // Вывод: 50
// console.log(calculate(10, 0, "/")); // Вывод: "Деление на ноль невозможно"
// console.log(calculate(10, 2, "/")); // Вывод: 5




// function findMax(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     return num1
//   } else if (num2 > num1 && num2 > num3) {
//     return num2
//   } else if (num3 > num1 && num3 > num2) {
//     return num3
//   } else {
//     return "we dont have the biggest one"
//   }
// }


// console.log(findMax(2,3,4))



// function removeCharacters(str, charsToRemove) {
//   let result = ""; // Создаем пустую строку для сохранения результата

//   for (let char of str) { // Перебираем каждый символ строки str
//     if (!charsToRemove.includes(char)) { // Проверяем, есть ли символ в массиве charsToRemove
//       result += char; // Если символ НЕ найден в массиве, добавляем его к результату
//     }
//   }

//   return result; // Возвращаем строку без удаленных символов
// }

// // Пример использования
// console.log(removeCharacters("hello world", ['l', 'd'])); // Вывод: "heo wor"



// function filterString(str, removeLetter) {
//   let result = ""
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

//   for (let letter of str) {
//     if (!vowels.includes(letter)) {
//       result += letter
//     }
//   }
//   return result
// }


// function reverseWords(str) {

//   let words = str.split("")

//   let reverseWords = words.map(word)
// }



// function calculateRectangleArea(length, width) {
//   if (width === undefined) {
//     return length * length
//   } else {
//     return length * width
//   }
// }

// console.log(calculateRectangleArea(5,10))


// function greetUser(name, greeting) {
//   if (greeting === undefined) {
//     return `Hello,  ${name}`
//   } else {
//     return `${greeting}, ${name}!`
//   }
// }


// function calculateDiscountPrice(price, discount) {
//   if (discount === undefined) {
//     return price - (price * (10 / 100))
//   } else {
//     return  price - (price * (discount / 100))
//   }
// }

// console.log(calculateDiscountPrice(100,10))



// function countVowels(str, vowels = ['a','e','i','o','u']) {
//   let count = 0;
//   for (let i of str) {
//     if(vowels.includes(i)) {
//       count++
//     }
//   }
//   return count
// }

// console.log(countVowels("Hello"))



// function countWords(str) {
//   let trimmedStr = str.trim()
//   let splitWords = trimmedStr.split(" ")
//   return splitWords.length 
// }

// console.log(countWords("hs hs hs"))



// function filterOutNumbers(array) {
//   return array.filter(function(element) {
//     return typeof element !== "number"
//   })
// }

// console.log(filterOutNumbers([1, "hello", true, 3, false, null, 546465]))



// function removeDuplicates(array) {
//   return array.filter(function(dublicates, index) {
//     return typeof dublicates ==
//   })
// }



function sum() {
  let array = [2]

  return function(number) {
    array.push(number)
    return array.reduce((total, current) => total + current, 0)
  }
}


let final = sum()


console.log(final(5))
console.log(final(6))

