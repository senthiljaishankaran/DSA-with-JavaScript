// Finding the greatest common factor b/t two numbers
function greatestCommonFactor(a,b){
    // if one number  is zero then the gcd will the number that is not zero itself
    if(b==0)
        return a
    else
        return greatestCommonFactor(b,a%b)
}

// Juggling algorithm
// This algorithm is also used to rotate the array with the given times to rotate and size of array
// step 1-> find the gcd with the time to rotate and size
// step 2-> split the array into sets of gcd value ie.. if gcd is 2 split the array into sets of 2
// step 3-> perform left rotation separately to the sets
// step 4-> Now join all the sets with changed values 

function jugglingAlgorithm(arr,n,d){
    // this modulus operation give incase if the rotating factor is more than array length
    // this will handle it giving atleast some rotation
    d=d%n
    let gcd=greatestCommonFactor(d,n)
    console.log("gcd is",gcd)
    for(let i=0;i<gcd;i++){
        let temp=arr[i]
        let j=i
        while(1){
            let k=j+d
            if(k>=n){
                k=k-n
            }
            if(k == i)
                break
            arr[j]=arr[k]
            j=k
        }
        arr[j]=temp
    }
}

function printingArrayUsingJugglingAlgorithm(arr){
    console.log("Array after rotated using juggling algorithm")
    console.log(arr.join(" "))
}

let array=[1,2,3,4,5,6,]
let n=array.length
let d=2

console.log("Array before rotating")
console.log(array.join(" "))

jugglingAlgorithm(array,n,d)
printingArrayUsingJugglingAlgorithm(array)

