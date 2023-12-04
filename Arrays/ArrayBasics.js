// An array is a collection of items stored at contiguous memory locations. 
//The idea is to store multiple items of the same type together

// initialization,definition and declaration
let arr=["java","javascript","kotlin"]
console.log(arr)

// defining an array and initializing it
let arrOfCars=new Array(5)
// declararion
arrOfCars[0]="BMW"
arrOfCars[1]="Honda"
arrOfCars[2]="Audi"
arrOfCars[3]="Merc"

console.log("Array of Cars: ",arrOfCars)

// accessing the single element
console.log("Accessing an single element in the array",arrOfCars[3])

// Changing the element in the array
arrOfCars[3]="Benz"
console.log("Array of Cars after changing the element: ",arrOfCars)

// converting an array to string
console.log("Array of Cars converted to string: ",arrOfCars.toString())

// manipulating the size of the array
arrOfCars.length=4

// Array of cars after changing the length
console.log("Array of Cars after length change: ",arrOfCars)

// looping through the array
for(let i=0;i<arrOfCars.length;i++)
console.log("Looping throught the array",arrOfCars[i])

// adding an element to the array
console.log("Array of cars before adding",arrOfCars)
arrOfCars.push("Mahindra")
console.log("Array of cars after adding",arrOfCars)

// arrays are objects
console.log("Type of the Array car is:",typeof arrOfCars)

// arrays of Number
let arrOfNumber=[2,3,4,5.5]
// looping through the Number array
for (let j=0;j<arrOfNumber.length;j++)
console.log("Array of Numbers:",arrOfNumber[j])

// Type of the Array of Numbers
console.log("Type of Array numbers is:",typeof arrOfNumber)

// recognising the array 
console.log("using Array.isArray() method: ",Array.isArray(arrOfNumber))
console.log("using instanceOf method: ",arrOfCars instanceof Array)