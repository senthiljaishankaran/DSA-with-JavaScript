function findingIndices(arr,target){
    const numMap=new Map()
    for(let i=0;i<arr.length;i++){
        let complement=target-arr[i]
        if(numMap.has(complement)){
            return [numMap.get(complement),i]
        }
        numMap.set(arr[i],i)
    }
}

let arr=[2,7,11,15]
let target=9
console.log(findingIndices(arr,target))