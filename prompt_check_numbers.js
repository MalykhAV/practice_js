
function includesANumber(item){
    let splitText = item.split(''); //разбиваем строку на эл-ты массива ["A","n","n","a"]
    for(let i = 0; i < splitText.length; i++) { 
        console.log(splitText[i]);
        let itemInt = parseInt(splitText[i]);//каждый элемент преобразуем в целое число, при этом буква становится NaN
        if(!isNaN(itemInt)){//проверяем не является ли эл-т числом
            return true;//если число, возвращаем true 
        }
    }
    return false;//если не число после того, как прошли по всему массиву, возвращаем false
}
function showResult(result, item){
    console.log(result);
    if(result === true){ //проверяем если result is true значит в массиве есть число
        console.log("Number: " + item);
    } 
    else {
        console.log("No Number: " + item);
    }
}

let item = "";
while(item !== "end"){ //мы выполняем действия до тех пор пока юзер не напечатает "end"
    item = prompt("Put your text");
    let result = includesANumber(item);
    showResult(result, item);
}