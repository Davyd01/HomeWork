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



// let counter = {
//   value: 0,

//   increment: function() {
//     this.value++
//     return this
//   },
//   decrement: function() {
//     this.value--
//     return this
//   },
//   reset: function() {
//     this.value = 0
//     return this
//   },
//   getValue: function() {
//     console.log(this.value)
//     return this
//   }

// }



// let book = {
//   library: [],

//   addBook: function(title) {
//     this.library.push(title)
//     return this
//   },
//   removeBook: function(title) {
//     const index = this.library.indexOf(title)
//     if (index !== -1) {
//       this.library.splice(index,1)
//     }
//     return this
//   },
//   listBooks: function() {
//     console.log(this.library)
//     return this
//   },
//   clearLibrary: function() {
//     this.library = []
//     return this
//   }
  
// }




// let counter = {
//   count: 0,

//   increment: function() {
//     this.count++
//     return this
//   },
//   decrement: function() {
//     this.count--
//     return this
//   },
//   showCount: function() {
//     console.log(this.count)
//     return this
//   }
// }


// let user = {
//   name: "",
//   setName: function(newName) {
//     this.name = newName;
//     return this
//   },
//   greet: function() {
//     console.log(`Hello, ${this.name}`)
//     return this
//   }
// }

// user.setName("dddd").greet(); // "Hello, Alice!"
// user.setName("Bob").greet(); // "Hello, Bob!"


// let calculator = {
//   setValues: function(a,b) {
//     this.a = a,
//     this.b = b;
//   },
//   sum: function() {
//     return this.a + this.b
//   },
//   multiply: function() {
//     return this.a * this.b
//   }
// }
// calculator.setValues(5,10)

// console.log(calculator.sum())



// let store = {
//   products: [],

//   addProduct: function(productName) {
//     this.products.push(productName)
//     return this
//   },
//   removeProduct: function(productName) {
//     const index = this.products.indexOf(productName)
//     if (index !== -1) {
//       this.products.slice(index, 1)
//     }
//     return this
//   },

//   showProducts: function(productName) {
//     console.log(this.products)
//     return this
//   },
//   clearStore: function(productName) {
//     this.products = []
//     return this
//   }

// }



// let bankAccount = {
//   balance: 0,

//   deposit: function(amount) {
//     this.balance += amount
//     return this
//   },
//   withdraw: function(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount
//     } else {
//       console.log("Недостаточно средств")
//     }
//     return this
//   },
//   showBalance: function(amount) {
//     console.log(this.balance)
//     return this
//   }
// }


// bankAccount.deposit(100).deposit(50).withdraw(30).showBalance(); // Баланс: 120
// bankAccount.withdraw(200); // Недостаточно средств




// let studyPlan = {
//   lessons: [],
  

//   addLesson: function(title, duration) {
//     this.lessons.push({title, duration})
//     return this
//   },
//   removeLesson: function(title) {
//     const index = this.lessons.findIndex(lesson => lesson.title === title)
//     if (index !== -1) {
//       this.lessons.splice(index, 1)
//     }
//     return this
//   },
//   getTotalDuration: function() {
//     return this.lessons.reduce((total, lesson) => total + lesson.duration, 0);
//   },
  
//   listLessons: function() {
//     this.lessons.forEach(lesson => console.log(`${lesson.title}: ${lesson.duration} hours`));
//     return this;
//   }
  
// }

// studyPlan.addLesson("JavaScript Basics", 3).addLesson("CSS Flexbox", 2).listLessons();
// console.log("Total Duration:", studyPlan.getTotalDuration()); // Total Duration: 5
// studyPlan.removeLesson("CSS Flexbox").listLessons();



// function foo(n) {
//   if(n === 0) {
//     return 1
//   }

//   return n * foo(n - 1)
// }

// console.log(foo(5))








// function NumberHandler(n = Number(prompt("Enter a non-negative number"))) {
//   this.n = n >= 0 ? n : 'Error';

//   this.sumToN = function() {
//     if (this.n === 'Error') {
//       return 'Error';
//     }
//     return recursiveSum(this.n)
//   }

//   function recursiveSum(num) {
//     if (num === 0) {
//       return 0
//     }
//     return num + recursiveSum(num - 1)
//   }

//   this.factorial = function() {
//     if (this.n === 'Error') {
//       return 'Error!';
//     }
//     return recursiveFactorial(this.n)
//   }

//   function recursiveFactorial(num1) {
//     if (num1 === 0) {
//       return 1
//     }
//     return num1 * recursiveFactorial(num1 - 1)
//   }

//   this.power = function(m) {
//     if (this.n === 'Error') {
//       return 'Error'
//     }
//     return recursivePower(this.n,m)
//   }

//   function recursivePower(base, exponent) {
//     if (exponent === 0) {
//       return 1
//     }
//     return base * recursivePower(base, exponent - 1)
//   }

//   this.fibonacci = function () {
//     if (this.n === 'Error' || this.n < 0) {
//       return 'Error'
//     }
//     return recursiveFibonacci(this.n)
//   }
//   function recursiveFibonacci(F) {
//     if (F === 0) {
//       return 0
//     } else if (F === 1) {
//       return 1
//     } else {
//       return recursiveFibonacci(F - 1) + recursiveFibonacci(F - 2)
//     }
//   }
// }

// const handler = new NumberHandler(7)
// console.log(handler.sumToN())
// console.log(handler.factorial())
// console.log(handler.power(3))
// console.log(handler.fibonacci())


// function Counter() {
//   this.count = 0;

//   this.increment = function() {
//     this.count = this.count + 1;
//     return this.count
//   }
// }

// const counter = new Counter()
// console.log(counter.increment())
// console.log(counter.count)


// function sumToN(n) {

//   if (n === 0) {
//     return 0
//   } else {
//     return n + sumToN(n - 1)
//   }
// }



// function factorial(n) {
//   if (n <= 0) {
//     return 1
//   } else {
//     return n * factorial(n - 1)
    
//   }
// }










