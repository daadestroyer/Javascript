// 1. Javascript Variables
var num1 = 10;
var num2 = 20;
console.log(num1+num2)

// 2. Datatypes in Javascsript 
/*
At a very high level there are 2 types of datatypes in JS
1. Primitive Data Types: string , number , boolean , undefinded , symbol
2. Reference Data Types: 
*/

// String
var str1 = "this is string"
var str2 = "this is also a string"

// Numbers
var num1 = 455
var num2 = 4.55
console.log(str1+" : "+str2+" "+num1+num2)

// Objects
var marks = {
    shubham : 34,
    shubhanshu : 33,
    sakshi : 40
}   
console.log(marks)

// Booleans
var a = true
var b = false
var c
console.log(a+":"+b+":"+c)

//  Null
var n = null
console.log(n)


// 3. Arrays in JS
var arr = [1,2,'shubham',4,5]
arr[2] = 'sakshi shubham' // changing array elements
console.log(arr.length) // length of array
arr.push('shubhanshu') // adding some element into array

// 4. Operators in JS
/*
1. Assignment Operators (c+=2 , c=2 , c-=2 , c*=2 , c/=2)
2. Comparison Operators (== , >= , <= , > , <)
3. Logical Operators (&& , || , ! )
4.  
5.
*/

var a = 100
var b = 50
console.log('the value of a+b = ',a+b)
console.log('the value of a-b = ',a-b)
console.log('the value of a*b = ',a*b)
console.log('the value of a/b = ',a/b)
console.log('the value of a%b = ',a%b)

console.log(true&&false)
console.log(false&&false)
console.log(true&&true)
console.log(true||false)
console.log(false||false)
console.log(true||true)
console.log(!false)
console.log(!true)


// 5. Functions

function avg(a,b){
    return "Average is : "+(a+b)/2
}
console.log(avg(4,6))
console.log(avg(10,50))