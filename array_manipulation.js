var music = ["Jazz", "Blues"]; // create an array
music.push("RocknRoll"); // add new item to the array

function penUltimate(arr, replace) { //параметры сам массив и value of a new item
    var penultimate = music.length - 2; // находим предпоследний элемент массива
    music[penultimate] = replace;  
}

penUltimate(music, "Classic"); 
console.log(music.shift());// "Jazz", используем shift() для удаления первого эл-ти массива и выводим на экран значение
music.unshift("Reggi"); // добавляем новое значение первого элемента
music.unshift("Rap"); //["Rap", "Reggi", "Classic", "RocknRoll"] опять добавляем новое значение первого элемента