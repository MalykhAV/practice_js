// You are given a string s and an integer array indices of the same length. 
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the 
// shuffled string.

var restoreString = function(s, indices) {
    let newS = [];
    for(let i = 0; i < indices.length; i++){
        newS[indices[i]] = s[i];
    }
       
    return newS.join("");
};
const s = "codeleet";
const indices = [4,5,6,7,0,2,1,3];
console.log(restoreString(s, indices))