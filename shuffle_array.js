var shuffle = function(nums, n) {
    let newNums = [];
    for(let i = 0; i<nums.length/2; i++){
        newNums.push(nums[i], nums[i + n]);
    }
    return newNums;
};
let nums = [1,2,3,4,4,3,2,1];
const n = 4;
console.log(shuffle(nums, n))