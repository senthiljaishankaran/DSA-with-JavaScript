// Here we follow the left rotation method but there is also right rotation method
// Rotating array using left rotation

function rotatingArray(arr,size,times){
    let temp=0
    while(temp<times){
        let tempArray=arr[0]
        for(let i=0;i<size-1;i++){
            arr[i]=arr[i+1]
        }
        arr[size-1]=tempArray
        temp++
    }
    for(let i=0;i<size;i++){
        console.log(arr[i])
    }
}

let arr=[1,2,3,4,5,6]
let size=arr.length
let times=2

console.log("Array before shifting:")
for(let i=0;i<size;i++){
    console.log(arr[i])
}

console.log("After Shifting the Array:")
rotatingArray(arr,size,times)

// making the same left rotation progrm with shift,push,join methods
// shift() - method removes the first element from an array and returns that removed element
// push() - method adds one or more elements to the end of an array and returns the new length of the array.
// join() - method creates and returns a new string by concatenating all the elements in an array

function rotatingArrayUsingShiftPush(arr,times){
    for(let i=0;i<times;i++){
        // here we store the removed element by shift method to first variable
        const first=arr.shift()
        // And push that element to the last using the push method 
        // being in the loop this operatio will repeat till the condition becomes false
        arr.push(first)
    }
}

function printingArrayShiftPush(arr){
    console.log("rotated arrays using Shift,Push methods:")
    console.log(arr.join(' '))
}

rotatingArrayUsingShiftPush(arr,times)
printingArrayShiftPush(arr)

// Roating array using temporary array method
function rotaingArrayUsingTemporaryArray(arr,size,times){
    let temp=[]
    let j=0
    for(let i=times;i<size;i++){
        temp[j]=arr[i]
        j++
    }

    for(let i=0;i<times;i++){
        temp[j]=arr[i]
        j++
    }

    for(let i=0;i<size;i++){
        arr[i]=temp[i]
    }
}

function printingArrayTempShift(arr){
    console.log("rotated arrays using Temp Array:")
    console.log(arr.join(' '))
}

rotaingArrayUsingTemporaryArray(arr,size,times)
printingArrayTempShift(arr)

// Rotating using reversal algorithm
// Reversal algoritm means we will reverse the elements to rotate and the static elements separately
// After that we reverse the whole elements thus it gives the desired rotation
// sample
// 123456 be the array
// shift method left and position 2 so first two elements reversed separately folloed by others
// it will look like 2 1 6 5 4 3 now if we reverse the whole elements 3 4 5 6 1 2

function reversingArray(arr,start,end){
    while(start < end){
        var temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
}

function rotatingArrayusingReversalAlgorithm(arr,size,times){
    if(times==0)
        return
    // this modulus operation give incase if the rotating factor is more than array length
    // this will handle it giving atleast some rotation
    times=times%size
    reversingArray(arr,0,times-1)
    reversingArray(arr,times,size-1)
    reversingArray(arr,0,size-1)
}

function printingArrayReversalAlgorithm(arr){
    console.log("Rotating array using reversal algorithm")
    console.log(arr.join(' '))
}

rotatingArrayusingReversalAlgorithm(arr,size,times)
printingArrayReversalAlgorithm(arr)
