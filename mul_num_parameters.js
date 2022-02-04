function mul() {
    var result = 0;
    var mul = 1; // assign mul to 0, because later we will use it for multiplication (avoid 0)
    
    for(var i = 0; i < arguments.length; i++) {// loop through the arguments object(like-array) of passed arguments
        if(typeof arguments[i] === "number") { 
            mul *= arguments[i]; // mul = mul * arguments[i], multipling each argument which is number type to mul
            result++; // adding +1 to result, if type of argument is number;
        }
    }
    //in case if any arguments aren't numbers we need to return 0, otherwise return multiplication result of arguments
    if(result > 0){ 
        return mul;
    }
    else {
        return result;
    }
}