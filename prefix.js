'use strict';
function getSmaller(pref, nextWord){ //get smaller length, we don't want to iterate more than smaller length
  if(pref.length > nextWord.length){
      return nextWord.length;
    }
    else{ 
      return pref.length;
    }
}

var longestCommonPrefix = function(strs) {
  let pref = strs[0]; //first word in array, will compare with it
  
  for(let item = 1; item < strs.length; item++){
    let nextWord = strs[item]; 
    
    let smallerLength = getSmaller(pref,nextWord);
    let diffLength;
    if(smallerLength < pref.length) {
      diffLength = pref.length;
    }
    else{
      diffLength = smallerLength;
    }
    console.log("diff" + diffLength);
    for (let i = 0; i < diffLength;i++){
     
      if(pref[i] != nextWord[i]){
        pref = pref.substring(0, i);
      }
      
    }
    console.log(pref)
    console.log('item:' + item,  "next word: " + nextWord, "smaller length: "+ smallerLength)
  }
  return pref;
};
let strs = ["ab", "a"];
console.log(longestCommonPrefix(strs));