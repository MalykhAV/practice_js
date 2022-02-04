// We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  
// For each such pair, there are freq elements with value val concatenated in a sublist. 
// Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.

var decompressRLElist = function(nums) {
    let newArr = [];
     for(let i = 0; i < nums.length; i+=2){
         let freq = nums[i];
         let val = nums[i+1];
         for(let j=0; j < freq; j++){
             newArr.push(val);
         }
     } 
     return newArr;
 };
 const nums = [1,1,2,3];
 console.log(decompressRLElist(nums));