// из массива необходимо получить число 123
let arr = [1,2,3];
let result = 0;

function getResult(arr){
  for(let i = arr.length-1; i >= 0; i--){

    let getTenth = Math.pow(10, i); //pow возводит число 10 в степень i
    result += (getTenth * arr[arr.length-i-1]);// length 3 - i(2)=1, 3-1, 3-0, если этого не сделать мы получим развернутое число 321 вместо 123 
  }
  return result;
}
console.log(getResult(arr));