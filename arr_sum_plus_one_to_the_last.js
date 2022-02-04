var plusOne = function(digits) {
    let lastItem = digits.length-1;
    digits[lastItem] = digits[lastItem]+1;
    for(let i = lastItem; i > 0;i--){
        
        if(digits[i] > 9){
            
            let result2 = digits[i-1] +1;
            digits[i-1] = result2;
            digits[i] = 0;
        }
  
    } 
    if(digits[0] > 9){
        digits[0] = 0;
        digits.unshift(1);
        console.log(digits);
    }
    return digits;
 
};
//console.log(plusOne([0]));
console.log(plusOne([1,9,1]));
// console.log(plusOne([1,0]));
//console.log(plusOne([1,9]));
// console.log(plusOne([9,9]));
// console.log(plusOne([1,9,9]));
//  console.log(plusOne([9,9,9]));
