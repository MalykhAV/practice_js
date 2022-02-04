function sum() {
    var sum = 0;

    // the arguments object contains every argument passed to your function, and it can be accessed in an array-like manner.
    // arguments = [argument1, argument2, argument3, etc];
    for(var i = 0; i < arguments.length; i++){ // we use for loop to go through object(like-array) of passed arguments
        if(typeof arguments[i] === "number") { // if type of argument is number, we execute code below 
            sum += arguments[i]; // sum = sum + arguments[i], if argument is a number add each argument to a current sum
        }
    } return sum;
}