function createArrayIterator(array) {
	let i = 0;  
	return function () {
		let num = array[i];
		i++;
		return num;
	}
}
var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr());
console.log(itr());
console.log(itr());
console.log(itr());