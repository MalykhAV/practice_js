var salaries = { // object
    John: 100,
    Bill: 300,
    Mike: 250 
};

function maxSalary(salaries) { //function which get 
    var max = 0; // create new variable max

    for(var i = 0; i < Object.keys(salaries).length; i++) { // iterate through keys of the object
        var key = Object.keys(salaries)[i]; // assign each key of the object to the variable key
        if(salaries[key] > max){ // checking if value of current key is greater than max
            max = salaries[key]; // if yes, reassign value of max variable
        }
    } 
    return max;
}

maxSalary(salaries);