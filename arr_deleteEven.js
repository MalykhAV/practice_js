function deleteEvenNumbers(array){
    for(var i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){ //if number is even
        array.splice(i, 1); //удаляем одну цифру начиная с i
        i--; //в связи с тем, что метод splice полностью убирает значние i из array, на ее место встает следующее значение
        // чтобы не пропустить это значение мы уменьшаем i и опять проходим по ней.
      }
    }
    return array;
  }
  var arr = [1,2,3,4,5];
  var getArr = deleteEvenNumbers(arr); 
  console.log(getArr);

  //same task with using filter()
  function deleteEvenNumbers(array){
    return array.filter(item => item % 2 !== 0);
  }
  var arr = [1,2,3,4,5];
  var getArr = deleteEvenNumbers(arr); 
  console.log(getArr);