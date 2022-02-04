// Метод flatMap() сначала применяет функцию к каждому элементу, а затем преобразует полученный результат в 
// плоскую структуру и помещает в новый массив
function matrixToArray(matrix) {
  var newArr = matrix.flatMap(function(item){
    return item; //получаем каждый эл-т массива [1, 2], [3, 4, 5]..
  });
  return newArr;
}

var matrixArr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(matrixArr);
console.log(arr);