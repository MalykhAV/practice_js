let users = "Login1,LOgin2,login3,loGin4";

// same as users.toLowerCase().split(",");
let usersLower = users.toLowerCase();
usersLower.split(","); 

// another variant, same result by using map()
let usersArr = users.split(","); //get an array
let usersLower = userArr.map(function(item){
    return item.toLowerCase();
});
console.log(usersLower);