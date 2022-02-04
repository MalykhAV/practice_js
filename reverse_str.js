let strExample = "abc";

//создаем функцию для реверса строки
function strReverse(strExample){
    let arr = strExaple.split(""); //["a","b","c"]
    let newArr = []; //пустой массив, будет заполнен элементами из arr в обратном порядке

    for(let i = arr.length - 1; i >= 0; i--){ //начинаем считать с последнего элемента и до 0 включительно
        newArr.push(arr[i]); //значение отправляем в newArr
    };
    return newArr.join('');//возвращаем контент в строку 
};
console.log(strReverse(strExample));

//palindrome - слова которые можно читать в обе стороны 
let str1 = '12022021';
let str2 = "not racecar";
let str3 = "racecar";
function isPalindrome(strI){ //Функция для проверки является ли слово полиандромом
    let getReverse = strReverse(strI);//вызываем ф-цию strReverse, данные заносим в getReverse
    if(getReverse === strI){
        return true;
    }
    else {
        return false;
    }
};
console.log("str1", isPalindrome(str1))
console.log("str2", isPalindrome(str2))
console.log("str3", isPalindrome(str3))