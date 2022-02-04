var answer;
var userChoice = [];
var arraySum = 0;
do { //we always do first iteration and check while condition at the end of do/while
	answer = parseInt(prompt("Type any number"));
	if(!isNaN(answer)) {
		userChoice.push(answer);
	}
	
} while(!isNaN(answer));

//we calculate sum of items in array
for(var i = 0; i < userChoice.length; i++) {
	arraySum += userChoice[i];
}
console.log(arraySum);