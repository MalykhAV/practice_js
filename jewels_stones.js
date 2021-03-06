// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function(jewels, stones) {
    let result = 0;
    for(let i = 0; i < stones.length; i++){
      let matchedStones = jewels.match(stones[i])
      if(matchedStones){
          result += 1;
        }
        
    }
  return result;
};
const jewels = "aA"; 
const stones = "aaAbA";
console.log(numJewelsInStones(jewels, stones));