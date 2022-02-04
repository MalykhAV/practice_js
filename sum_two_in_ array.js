var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let l = 0;l < nums.length; l++ ){
            if(nums[i] + nums[l] === target && i !== l){
                return [i, l];
            }
        }
    }
};
let num = [3,3];
let target = 6;
console.log(twoSum(num, target));