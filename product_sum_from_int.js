var subtractProductAndSum = function(n) {
    let getArr = digitToArray(n);
    console.log(getArr);
    
    let digitProduct = 1;
    let digitSum = 0;
    for(let i = 0; i < getArr.length; i++){
        digitProduct *= getArr[i];
        digitSum += getArr[i]
    } 
    const result = digitProduct - digitSum;
    return result;
};
function digitToArray(n){
    let arr = []; //[2, 3, 4]
    let who = n;
    while(who > 0){ //преобразуем число в array
        arr.unshift(who % 10); // shift добавляет первый элемент в массив, смещая остальные 
        who = (who/ 10) | 0;
        
    }
    
    return arr;
};

const n = 234;
console.log(subtractProductAndSum(n));