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





// function sumEvenNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++){
//     if (i % 2 === 0) {
//       sum += i
//     } 
//   }
//   return sum
// }

// console.log(sumEvenNumbers(44))


// function findDivisors(n) {
//   let divisors = []

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       divisors.push(i)
//     }
//   }
//   return divisors
// }

// console.log(findDivisors(44))



// function countVowels(str) {
//   let toLowerCase = str.toLowerCase().split("")
//   let count = 0;
  

//   for (let i of toLowerCase) {
//     if ("aeiou".includes(i)) {
//       count++
//     }
//   }
//   return count
// }

// console.log(countVowels("awerty"))



// function reverseString(str) {
//   let split = str.split("")
//   let reverse = split.reverse()
//   let join = reverse.join("")
//   return join
// }

// console.log(reverseString("hello"))


// function findLargestNumber(arr) {
//   let largest = arr[0]

//   for (let i of arr) {
//     if (i > largest) {
//       largest = i
//     }
//   }
//   return largest
// }

// console.log(findLargestNumber([2,5,7,8,5,7,8,65,4,8,589,56,5,8,58]))


// function removeDuplicates(arr) {
//   let unique = []

//   for (let i of arr) {
//     if (!unique.includes(i)) {
//       unique.push(i)
//     }
//   }
//   return unique
// }

// console.log(removeDuplicates([2,2,3,3,4,5,6,6]))



// function capitalizeWords(str) {
//   let arr = str.split(" ")
//   let capitalizedWords = arr.map(word => {
//     return word[0].toUpperCase() + word.slice(1)
//   }) 
//   return capitalizedWords.join(" ")
// }

// console.log(capitalizeWords("hello world"))



// let skill = {
//   name: 'html';
//   level: 4;
//   fullSkill: function() {
//     return '${this.name}'-${this.level}
//   }
// }




// function Calculator(a, b) {
//   this.a = a
//   this.b = v
// }



// let user = {
//   id: 1,
//   firstName: 'anton',
//   lastName: 'holovin',
//   age: '30'
//   fullName: function() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// console.log(user.fullName())
// fullName()



// var data = [
//   {name: 'samantha', age: 12},
//   {name: 'alex', age: 14}
// ]

// let user = {
//   data: [
//     {name: 'woods', age: 37},
//     {name: 'mickelson', age: 43}
//   ],
//   showData() {
//     console.log(this);
//     console.log(`${this.data[0].name} - ${this.data[0].age}`)
//   }
// }


// let showDataVar = user.showData;

// showDataVar()



