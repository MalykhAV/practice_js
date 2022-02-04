let arr = [2,3,6,6,5,1,2,1];

function getSecondLargest(arr) {
	let firstLargest = 0;
	let secondLargest = 0; 

	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > firstLargest){
			firstLargest = arr[i];
		}
	}
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > secondLargest && arr[i] < firstLargest){
			secondLargest = arr[i];
		}
	}
	return secondLargest;
}
let a = getSecondLargest(arr);
console.log(a);