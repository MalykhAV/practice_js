let x = 121;

function getResult(arr){ //функция для разворота числа
    let result = 0;
    for(let i = arr.length-1; i >= 0; i--){
        let getTenth = Math.pow(10, i); // pow возводит 10 в степень i, т.о получаем 100, 10, 1
        result += (getTenth * arr[i]); //умножаем 100 и значение массива и добавляем к предыдущему результату, итого 321
    }
    return result;
}

let isPalindrome = function(x) {
    let arr = []; //[1, 2, 1]
    let who = x;
    while(who > 0){ //преобразуем число в array
        arr.unshift(who% 10); // shift добавляет первый элемент в массив, смещая остальные 
        who = (who/ 10) | 0;
        
    }
    let compareResult = getResult(arr); //сравниваем полученные результаты 
    if(compareResult === x) {
        return true; 
    }
    else {
        return false;
    }
};
console.log(isPalindrome(x));
