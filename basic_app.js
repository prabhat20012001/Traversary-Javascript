*
console.log("hello");
console.log("world")
console.log(123)
console.log(true)
var greeting="hell0"
console.log(greeting)
console.log([1,2,3,5])
console.log({a:1,b:2})
console.table({name:"prabhat",age:"22"})
console.error("This is some error")
console.warn("warning haai")
console.time("hello");
   console.log("my")
   console.log("name")
   console.log("is")
   console.log("Prabhat")
console.timeEnd("hello"); */

//var ,let ,const

// var name="Prabhat";
// console.log(name);
// name="SONU"
// console.log(name)  //we can reassign variable if using var or let

//init var
// var greeting
// console.log(greeting)
// greeting="Hello"
// console.log(greeting)

//variable can include letters,numbers,_,$
// can not start with a number 

//let
// let name="Prabhat";
// console.log(name);
// name="SONU"
// console.log(name)

// const
// const name="john"
// console.log(name)

// can not reassign and must have to assign a value
// name="sara"
// const greeting;(wrong)

//use const with the things that can change but can not be re assign
// const person={
//     name:"ram",
//     age:2
// }
// console.log(person)
// person.name="sara"
// person.age=54
// console.log(person)


        // ARRAY
// const numbers=[1,2,3,4,5];
// numbers.push(9)
// // numbers=[1,2,3,4,5,6] can not be done 
// console.log(numbers)


//Data types in JavaScript

//Primitive Data Types:
// Stored directly in the location the variable access Stored on the stack
   /* -String 
    

      -Number
      -Boolean
      -Null
      -Undefined
      -Symbols(ES6)

      */


//Reference Data types:
// Accessed by reference 
// Objects that are stored on the heap
// A pointer to a location in memory

/*   -Arrays
     -Objects Literals
     -Functions
     -Dates
     -Anything else..

//DYNAMICALLY TYPES LANGUAGE

Types are associated with values not variables
The same variable  can hold multiple types
We do not need to satisfy aypes
Most other languages are statically typed(Java,c#,C++)
There are supersets of JS and addons to allow static typing (TYPESCRIPT,Flow)

*/

// console.log(new Date())

// Anything to String

// val=String(true);
// console.log(val) //true
// // val=String(newDate());
// //console.log(val) //newDate is not defined
// val=String([1,2,3,4]);
// console.log(val) // 1,2,3,4

//toString()
// val=(5).toString()
// console.log(val) //5
// val=(true).toString()
// console.log(val) // true

// String to number 

// val=Number('5');
// console.log(val) //5

// val=Number(true);
// console.log(val) //1

// val=Number(false);
// console.log(val) // 0

// val=Number(null);
// console.log(val) //0

// val=Number('hello');
// console.log(val) //NaN

// val=Number([1,2,3,4]);
// console.log(val)  //NaN
// console.log(typeof val) // number
// console.log(val.length)  //undefined

    // parseInt()
// val= parseInt('100')

// console.log(val) //100
// console.log(typeof val) // number

// val= parseFloat('100.30')
// console.log(val)  // 100.3
//console.log(typeof val) // number

// TYPE COERSION

// We take one type and change it to another but we dont actually do it
// javascript does it for us
// const val1=String(5);
// const val2=6;
// const sum=val1+val2
// console.log(sum) //56
// console.log(typeof sum) // string



///NUMBERS AND MATH OBJECT///

// const num1=100;
// const num2=50;
// let val;

// //Simple math with numbers
// val=num1+num2
// console.log(val) // 150

// val=num1-num2
// console.log(val)  //50

// val=num1*num2
// console.log(val)   //5000

// val=num1/num2 
// console.log(val)   // 2

// val=num1%num2
// console.log(val)    // 0

///MATH OBJECT ///
//  val=Math.PI
//  console.log(val) //3.141592653589793

//  val=Math.E
//  console.log(val) // 2.718281828459045

//  val=Math.round(2.4)
//  console.log(val)  //2

//  val=Math.ceil(2.4)
//  console.log(val)  //3


//  val=Math.floor(2.8)
//  console.log(val)  // 2


//  val=Math.sqrt(64)
//  console.log(val) //8


//  val=Math.abs(-3)
//  console.log(val)  //3


//  val=Math.pow(8,2)
//  console.log(val)  //64


//  val=Math.min(2,33,4,1,55,6,3,-2)
//  console.log(val)  //-2


//  val=Math.max(2,33,4,1,55,6,3,-2)
//  console.log(val)  //55


//  val=Math.floor(Math.random()*10);
//  console.log(val) 

/*
//////     STRING  //////////

const firstName='William';
const lastName='johnson';
const age=36;
const str='Hello there my name is Brad';
const tags='web design,web devlopment,programming';
let val;

val=firstName+lastName;
console.log(val) // Williamjohnson

//concatenation
val=firstName+ " "+lastName
console.log(val)  //William johnson

//Append

val="Brad ";
val+="Traversary";
console.log(val) // Brad Traversary


val='Hell0,my name is '+firstName+' and I am ' + age ;
console.log(val) //Hell0,my name is William and I am 36

// Escaping //
val= 'That\'s awesome, i can\'t wait';
console.log(val) //That's awesome, i can't wait

// Length //

val=firstName.length
console.log(val) //7

// Concat //

val=firstName.concat(" ",lastName);
console.log(val) // William johnson

// Change case //
val=firstName.toLowerCase();
console.log(val) // william

val=firstName.toUpperCase();
console.log(val) // WILLIAM

val=firstName[0]
console.log(val) // W

val=firstName[2]
console.log(val) // l

// indexOf()
val=firstName.indexOf('2');
console.log(val) // -1

val=firstName.lastIndexOf('l');
console.log(val) // 3

// charAt()
 val=firstName.charAt("2")
 console.log(val) // l

 // Get last char
val=firstName.charAt(firstName.length-1)
 console.log(val) // m

 // substring
val=firstName.substring(0,4)
console.log(val) //Will

// slice
val=firstName.slice(0,4)
console.log(val)  //Will

val=firstName.slice(-3)
console.log(val)  //iam

//split()
val=str.split(' ');
console.log(val) // ['Hello', 'there', 'my', 'name', 'is', 'Brad']

val=tags.split(',')
console.log(val) //  ['web design', 'web devlopment', 'programming']

//replace()

val=str.replace('Brad','Jack')
console.log(val) //Hello there my name is Jack

// includes()
val=str.includes('Hello')
console.log(val) //true

val=str.includes('foo')
console.log(val)  //false
*/
/*
const name='John';
const age=30;
const job='Web Devloper';
const city='Miami';
let html;

// Without template strings (es5)

// html='<ul><li>Name:' + name + '</li><li>Age: '+age+'</li><li>Job:'+job+'</li>'+'</li><li>City:'+city+'</li></ul>';
// document.body.innerHTML=html;

//
// html='<ul>'+
// '<li>Name:' + name + '</li>'+
// '<li>Age:'+ age +'</li>'+
// '<li>Job:'+job+'</li>'+
// '<li>City:'+city+'</li>'+
// '</ul>';


//document.body.innerHTML=html;

///////// with template string /////////

/*

function hello(){
    return 'hello';
}
html=`
<ol>
    <li>Name:${name}</li>
    <li>Age:${age}</</li>
    <li>Job:${job}</</li>
    <li>City:${city}</</li>
    <li>${2+2}</</li>
    <li>${hello(  )}</</li>

</ol>
`;
document.body.innerHTML=html;

/////////////////SOME ARRAYS/////////////////

const numbers=[43,56,33,23,44,36,5];
const numbers2=new Array(22,45,33,76,54);
const fruit=['Apple','Banana','Orange','Pear'];
const mixed=[22,'hello',true,undefined,null,{a:1,b:1},new Date()];

console.log(mixed); //  [22, 'hello', true, undefined, null, {…}, Thu Jan 12 2023 10:55:20 GMT+0530 (India Standard Time)]

console.log(numbers) // [43, 56, 33, 23, 44, 36, 5]


let val;
//array length
val=numbers.length
console.log(val)  ///  7
//check if array
val=Array.isArray(numbers)
console.log(val)  /// true

// get single value
val= numbers[3]
console.log(val)  // 23

val=numbers[0]
console.log(val) // 43

// insert into array 
 numbers[2]=100
 console.log(numbers) // [43, 56, 100, 23, 44, 36, 5]

 //Find index of value 

 val=numbers.indexOf(36)
 console.log(val)  // 5

 /////////MUTATING ARRAYS

 //Add on to end
 numbers.push(250);
 console.log(numbers) // [43, 56, 100, 23, 44, 36, 5, 250]

  //Add on to front
  numbers.unshift(120);
 console.log(numbers)    /// [120, 43, 56, 100, 23, 44, 36, 5, 250]
 
 //  Take off from end
 numbers.pop()
 console.log(numbers)   // [120, 43, 56, 100, 23, 44, 36, 5]

  //  Take off from front
  numbers.shift()
 console.log(numbers)  // [43, 56, 100, 23, 44, 36, 5]

 // splice values

 numbers.splice(1,3)
 console.log(numbers)   // [43, 44, 36, 5]

 // Rverse the arrays
numbers.reverse()
console.log(numbers)  //[5, 36, 44, 43]

//Concatenate array
val=numbers.concat(numbers2)
console.log(val)  // [5, 36, 44, 43, 22, 45, 33, 76, 54]

// Sort arrays
val=fruit.sort()  
console.log(val)     //  ['Apple', 'Banana', 'Orange', 'Pear']
/*
val=numbers.sort()  
console.log(val)     /// [36, 43, 44, 5] (sorting by first digit of number)

 use the "compare function"
val=numbers.sort(function(x,y){
    return x-y;
})
console.log(val)   ///  [5, 36, 43, 44]

// Reverse sort
val=numbers.sort(function(x,y){
    return y-x;
})
console.log(val) /// [44, 43, 36, 5]
*/

/* find
function under50(num){
    return num<50;
}

val=numbers.find( under50)
console.log(numbers)  // [5, 36, 44, 43]
console.log(val);     // 5

function over30(num){
    return num>30;
}
val=numbers.find(over30)
console.log(numbers)  // [5, 36, 44, 43]
console.log(val);   // 36  */

//////////////// OBJECT LITERAL /////////////

/*

const person={
    firstName:"Steve",
    lastName:"Smith",
    age:30,
    email:"pkr256@gmail.com",
    hobbies:["music","sports"],
    address:{
        city:"mumbai",
        state:"bihar"
    },
    getBirthYear:function(){
        return new Date()-this.age;
    }

}
let val=person;
console.log(val)  // {firstName: 'Steve'}

//  specific value 
val=person.firstName
val=person['firstName']
console.log(val) // Steve

val=person.age
console.log(val)  // 30

val=person.address.city
console.log(val)   // mumbai

val=person.hobbies[0]
console.log(val)    // music

val=person.getBirthYear();
console.log(val)    //  Thu Jan 12 2023 11:38:08 GMT+0530 (India Standard Time)

/// arrays of object//
const people=[
    {name:'john',age:30},
    {name:'Mike',age:23}
]

for(i=0;i<people.length;i++){
    console.log(`my name is ${people[i].name} and age is ${people[i].age}`)
} 
//my name is john and age is 30
// my name is Mike and age is 23
*/
/*
let val;
const today=new Date();
val=today.getDate();
console.log(val) // 12

val=today.getDay();
console.log(val) // 4

val=today.getFullYear();
console.log(val)   // 2023

val=today.getHours();
console.log(val)  // 12

val=today.getTime();
console.log(val)  */


/// //   if else conditionals  ///////////
//equal to
const id='100';

if(id==100){
    console.log("correct!")
}else{
    console.log("incorrect")
}

// not equal to

if(id!=100){
    console.log("correct!")
}else{
    console.log("incorrect")
}
