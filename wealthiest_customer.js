// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
    let richest = 1;
    
    accounts.forEach(function(customer){
        let wealth = 0;
        customer.forEach(function(bank){
           wealth += bank;
        }); 
        if(richest < wealth){
           richest = wealth;
        }           
        
    });
    return richest;
    
};
let accounts = [[1,2], [2,2]]; //each account represented by array nested within array
console.log(maximumWealth(accounts));