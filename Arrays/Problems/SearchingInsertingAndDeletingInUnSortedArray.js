// Searching In an Unsorted Array

function searchingInUnSortedArray(arr,size,key){
    let i;
    for(i=0;i<size;i++)
        if(arr[i] == key)
            return i
    return -1
}

let arr=[5,2,8,11,3]
let size=arr.length
let key=8
let position=searchingInUnSortedArray(arr,size,key)

if(position == -1)
console.log("Element Not Found")
else
console.log("Element found at:", (position+1))

// Inserting an element at last position in an unsorted array

function insertingElementAtLast(array,n,keyValue,capacity){
    if(n>=capacity)
        return n
    array[n]=keyValue
    return (n+1)
    }

let array=new Array(10)
array[0]=16
array[1]=2
array[2]=20
array[3]=7
array[4]=13

let n=5
let keyValue=30
let capacity=10
let j

console.log("Array before insertion:")
for(j=0;j<n;j++){
    console.log(array[j]+" ")
}
console.log("Array After insertion at end")
n=insertingElementAtLast(array,n,keyValue,capacity)
for(j=0;j<n;j++){
    console.log(array[j]+" ")
}

// inserting an element in the array at random position
function insertingElementAtRandomPos(array,n,pos,x){
    var i =n-1
    for(i;i>=pos;i--){
        array[i+1]=array[i]
    }
    array[pos]=x
}

let newArray=new Array(5)
newArray[0]=11
newArray[1]=5
newArray[2]=32
newArray[3]=27
newArray[4]=19

let arraySize=newArray.length
let pos=2
let i=0
let numberInsert=22

console.log("Array before insertion at random position:")
for(i;i<arraySize;i++){
    console.log(newArray[i])
}

console.log("Array after insertion at random position:")
insertingElementAtRandomPos(newArray,arraySize,pos,numberInsert)
i=0
arraySize+=1
for(i;i<arraySize;i++){
    console.log(newArray[i])
}

// deleting a element at the given position
function findingElementToDelete(arr,n,key){
    let i
    for(i=0;i<n;i++)
        if(arr[i] == key)
        return i
    return -1
}

function deletingElement(arr,n,key){
    let pos=findingElementToDelete(arr,n,key)
    if(pos == -1){
        console.log("Element Not found")
    }
    let i
    for(i=pos;i<n;i++)
        arr[i]=arr[i+1]

    return n-1
}

console.log("Array before deletion:")
let k
let deleteKey=32
for(k=0;k<arraySize;k++)
    console.log(newArray[k])
console.log("Array After deletion")
let l=deletingElement(newArray,arraySize,deleteKey)
for(k=0;k<l;k++)
    console.log(newArray[k])
