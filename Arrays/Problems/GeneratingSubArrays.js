// Generating sub arrays using recursion
function generateSubArrays(arr,start,end){
	if(end==arr.length)
		return
	else if(start>end)
		generateSubArrays(arr,0,end+1)
	else{
		console.log("[")
		for(var i=start;i<end;i++){
			console.log(arr[i] +",")
		}
		console.log(arr[end] +"]")
		generateSubArrays(arr,start+1,end)
	}
}

var arr = [ 1, 2, 3 ];
generateSubArrays(arr,0,0)
