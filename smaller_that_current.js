// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

var smallerNumbersThanCurrent = function(nums) {
    let newNums = [];
    for(let i = 0; i < nums.length; i++){
        let greater = 0;
        for(let j = 0; j < nums.length; j++){
            if(j!=i && nums[i] > nums[j]){
                greater += 1; 
            }
        }
        newNums.push(greater);
    }
    return newNums;
};
const nums = [7,7,7,7];
console.log(smallerNumbersThanCurrent(nums));