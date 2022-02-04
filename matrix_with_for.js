function matrixToArray(matrix) {
    let newArr = [];
    for(let i=0; i < matrix.length; i++){//сначала с помощью for получаем каждый эл-т matrixArr (н-р: элемент 0 - [1,2] )
      for(let y = 0;y < matrix[i].length; y++){ // с помощью второго for получаем эл-т вложенного массива (н-р: 1, 2)
        newArr.push(matrix[i][y]); // каждый эл-т вложенного массива отправляем в новый пустой массив один за одним
      }
    } return newArr;  
  }
  var matrixArr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
  var arr = matrixToArray(matrixArr);
  console.log(arr);