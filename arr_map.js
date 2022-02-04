// The map() method creates a new array populated with the results of calling a provided function 
// on every element in the calling array.

var arr = ["Tom", "Sam", "Bob"];
var arrLength = arr.map(function(item){
  return "<li>" + item + "</li>";
});
console.log(arrLength);