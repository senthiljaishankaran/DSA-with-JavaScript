// Tradition Method to reverse an array
function reverseArray(arr,start,end){
    while(start<end){
        var temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
}

function printArray(arr,size){
    for(let i=0;i<size;i++){
        console.log(arr[i])
    }
}

let arr=[1,2,3,4]
let n=4

console.log("printing the inital defined array:")
// here the n on the print array function is pointing to length so we used n directly
printArray(arr,n)

console.log("Printing the reversed array:")
// here the n on the reverse array function is pointing to index so we need to use n-1
reverseArray(arr,0,n-1)
printArray(arr,n)

// recursion method
// recursion means the function calling itself

function reversingArrayRecursion(arr,start,end){
    var temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp

    if(start+1<end-1){
        reversingArrayRecursion(arr,start+1,end-1)
    }
}

console.log("Recursion method to reverse an array")
reversingArrayRecursion(arr,0,n-1)
printArray(arr,n)