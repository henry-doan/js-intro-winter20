// comment 
// Datatype 
//   String
//     '' ""
//   Integer
//     123
//   13 0
//   -1
//   Float
//     .123
//   Boolean
//     true 
//     false
//   Array
//     [ ]
//   Hashes
//     { key: values }
//   Date
//   Null
      // NaN
      //   not a number
//   undefined
// Operator 
//   + - * / PEMDAS
//   % Modulus 
  // console.log('hello' + 'world')
// Comparators
//   <
//   >
//   <=
//   >=
//   ==
//   ===
//     '3' === 3
//         false
//     3 === 3 
//       true
//   !=
//   !==
// Logical Operators
//   && - and
//   || - or 
// Math
//   Math.PI
//   Math.E
//   Math.random()
 // console.log(Math.round(8.3))
 //  console.log(Math.round(8.7))
//   console.log(Math.floor(8.1))
// console.log(Math.floor(8.9))
// console.log(Math.ceil(8.9))
// console.log(Math.ceil(8.1))
  // = Assignments
// Variables, store objects for later use 
//   var firstName = 'bob'
  // can letters, numbers, underscores, dollar signs
  // has to begin letter $ _
  // case sensitive 
  //   var person
  //   var pErson
  // can't be reserved 
  //   var var class null 
//   descriptive 
//  reassignment
// var balance = 1000
// console.log(balance)
// balance = 800
// console.log(balance)
// block level scope 
// ++
// --
// +=
//  -=
//   *=
//   /=
// console.log('this is my number' + 3/4)
// console.log('this is my number \t')
// console.log('this is my number \n')
// console.log('this is my number \t' \ )
var longString = 'This is a long string'
var shortString = 'Shorter'
// console.log(longString.length)
// console.log(shortString.length)
// console.log(shortString.length > 2 )
// console.log(shortString.charAt(0))
// console.log(shortString.charAt(1))
// console.log(shortString.charAt(900))
// console.log(shortString.charAt(-10))
// console.log(null)
// console.log(undefined)
// console.log(nan)
// var num = Number("1")
// var num = Number("-1.3")
// var num = Number("s")
// var num = Number("1a")
// var num = parseInt('1')
// var num = parseInt('a')
// var num = parseInt('1.2')
// var num = parseInt('1.9')
// var num = parseInt('1a')
// var num = parseInt('1a2')
// var num = parseFloat('1')
// var num = parseFloat('1.43')
// .toString()
// console.log(num)
// var myNumber = 5.213;
// console.log(myNumber.toFixed(1));
// // => 5.2
// console.log(myNumber.toFixed(2));
// // => 5.21
// console.log(myNumber.toFixed(5));
// // => 5.21300
// console.log(myNumber.toPrecision(1));
// // => 5
// console.log(myNumber.toPrecision(2));
// // => 5.2
// var arr = [ ]
// arr = [ 12, 'string', true]
// console.log(arr[1])
// console.log(arr.indexOf('string'))
// console.log(arr.indexOf('black'))
// console.log(arr.join(', '))
// console.log(arr.includes('black'))
function cl(input) {
  console.log(input)
}
// var arr = ['red', 'white', 'yellow']
// arr.push("Green")
// cl(arr)
// // var arr = ['red', 'white', 'yellow']
// arr.unshift("black")
// cl(arr)
// arr.pop()
// cl(arr)
// arr.shift()
// cl(arr)
// cl(arr.slice(1))
// cl(arr)
// cl(arr.length)
// cl(arr.reverse())
var arr = ['red', 'white', 'yellow']
// for(var i = 0; i < arr.length; i++) {
//   cl(arr[i])
// }
// arr.forEach( function (color) {
//   cl(color)
// })
// for ( let color of arr) {
//   cl(color)
// }
// map
  // arr.map( function (num) {
  //   cl(num)
  // })
// var numbers = [1,2,3,4,5,6,7,8]
// var even = numbers.filter( function(num) {
//   return num % 2 === 0
// })
// console.log(even)
// var numbers = [1,2,3,4,5,6,7,8]
// // total = accumulator && num = currentValue
// var sum = numbers.reduce( function(total, num) {
//   return total + num
// }, 0 )
// console.log(sum)
// Object
  // Hash{ key: value }
  // Json keys value
  // class
  //     new Person()
  // by context 
// var person = { first_name: 'Dave', age: 23 }
// cl(person['first_name'])
// cl(person.age)
// cl(person.hair = 'black')
// cl(person)
//  var people = {
//     names: ['Alex', 'Derek', 'Nhi', 'Will', 'Spencer'],
//     roles: ['Instructors', 'TA', 'Administrators']
// };
// cl(people.names[1])
// cl(people.roles[0])
// var vehicles = {
//  cars: [
//    { make: 'Chevrolet', model: 'Malibu' },
//    { make: 'Ford', model: 'Focus' }
//  ],
//  trucks: [
//    { make: 'Chevrolet', model: 'Silverado' },
//    { make: 'Toyota', model: 'Tacoma' },
//    { make: 'Ford', model: 'F-150' }
//  ]
// }
// cl(vehicles.trucks[2].model)
// var cars = [
//     { make: 'Chevrolet', model: 'Silverado' },
//    { make: 'Toyota', model: 'Tacoma' },
//    { make: 'Ford', model: 'F-150' }
// ]
// cl(cars[2].model)
// JSON 
//   format for storing and transporting data
//   javascript object notation.
// {
//   "firstName": "John",
//   "lastName": "Doe"
// } 
// var person = JSON.parse(object);
    