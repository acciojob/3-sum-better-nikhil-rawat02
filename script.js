function threeSum(arr, target) {
// write your code here
		arr.sort((a,b) =>{
		return a-b;
	});	
	
	let res = 0;
	let diff = Number.MAX_VALUE;
	for(let i =0; i < arr.length-2 ; i++){
		let j =i+1;
		let k = arr.length-1;
		
		while(j < k){
		    
		    let sum = (arr[i]) + (arr[j]) + (arr[k]);
    		let curr_diff = Math.abs(Math.abs(sum) - Math.abs(res));
			if(sum == target){
				return target;
			}else if( sum > target){
			  if(curr_diff < diff){
			    diff = curr_diff;
			    res = sum;
			  }
				k--;
			} else if(sum < target){
				if(curr_diff < diff){
			    diff = curr_diff;
			    res = sum;
			  }
				j++;
			}
		}
	}
	return res;
}

module.exports = threeSum;
