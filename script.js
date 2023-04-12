function threeSum(arr, target) {
// write your code here
		arr.sort((a,b) =>{
		return a-b;
	});	
	
	let res = Number.MAX_VALUE;
	for(let i =0; i < arr.length-2 ; i++){
		let j =i+1;
		let k = arr.length-1;
		
		while(j < k){
		    
		    let sum = (arr[i]) + (arr[j]) + (arr[k]);
    		let curr_diff = Math.abs(Math.abs(sum) - Math.abs(res));
			if(Math.abs(target - sum ) < Math.abs(target - res)){
				res = sum;
			}
			if(sum < target){
				j++;
			}else if(sum > target){
				k--;
			}else{
				return sum;
			}
		}
	}
	return res;
}

module.exports = threeSum;
