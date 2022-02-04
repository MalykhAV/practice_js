// There are n kids with candies. You are given an integer array candies, where each candies[i] 
// represents the number of candies the ith kid has, and an integer extraCandies, 
// denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, 
// after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, 
// or false otherwise.
// Note that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    let resultExtra;
    let superCandy = [];
    let getGreat = greatestAmount(candies);  
    for(let i = 0; i < candies.length; i++){
       resultExtra = candies[i] + extraCandies;
       console.log("resultExtra:" + resultExtra + "get great: "+getGreat);
      if(getGreat <= resultExtra){
         
          superCandy.push(true);
       }
        else{
          superCandy.push(false);
        }
   } 
  return superCandy;
};
greatestAmount = function (candies){
    let greatest = 0;
    for(let i = 0; i < candies.length; i++){
       if(candies[i] > greatest){
           greatest = candies[i];
       }
    } 
    return greatest;
};
const candies = [2,3,5,1,3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));