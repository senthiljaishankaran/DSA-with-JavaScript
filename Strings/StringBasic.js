/**
 * String is used to represent the sequence of characters made of list of characters essentially 
 * array of characters that holds the data  and manipulate the data(checking length,concatenating etc) 
 * which is represented in text form
 */

// creating string using string literal
let singleQuotes="String Created with Single Quotes"
let doubleQuotes="String Created with Double Quotes"
let templateLiteral="String Created with template Literal"

console.log("String Created by Single Quotes:",singleQuotes)
console.log("String Created by Dounle Quotes:",doubleQuotes)
console.log("String Created by Template Literal :",templateLiteral)

// creating string using object
let string=new String("I am Learning DSA")
console.log("String Created using the object:",string)

// below method wont work on the string created using the object
// Accessing the Character
let str="Senthil"
// using the char at method
console.log(str.charAt(4))
// using the array-like object
console.log(str[6])

// creating array of strings
// Method 1
let arrStrings=["Apple","Orange","Cucumber"]
// Method 2
let arrStrings2=new Array("Onion","Tomato","Carrot")

// Concatenation of strings
let a="Hello,"
let b="World"
console.log("Result of the concatenation of the above two strings is:",a+b)

// finding the index of the string 
console.log(a.indexOf('l'))

// sub-strings include the first given index and ignores the second given index
console.log(b.substring(1,3))

// replacing the part of the string
let str2="Welcome to India"
let str3=["Chennai","bangalore","Munbai"]
console.log(str2.replace("India",str3[0]))

