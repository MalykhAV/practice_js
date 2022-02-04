//Given a roman numeral, convert it to an integer.
let romanExclusion = {
    IV: 2,
    IX: 2,
    XL: 20,
    XC: 20,
    CD: 200,
    CM: 200,
  };
  let romanToNum = {
      I: 1,    
      V: 5,    
      X: 10,    
      L: 50,    
      C: 100,    
      D: 500,    
      M: 1000
  };
  
  var romanToInt = function(s) {
  
    let sum = 0;
    
    for(let i = 0; i < s.length; i++){
        let romanVal = romanToNum[s[i]];
        sum += romanVal   
    }
    for(let [key, value] of Object.entries(romanExclusion)) {
      if(s.includes(key)){
        sum = sum - value;
      }
    }
    return sum;
  };