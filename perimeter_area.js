function perimeter(width, height) { 
	rectanglePerimeter = (width * 2) + (height *2);
	return rectanglePerimeter;
}
function area(width, height) {
	rectangleArea = width * height;
	return rectangleArea;
}
var width;
var height;
do { // by using DO WHILE asking user number that greater than 0
	width = parseInt(prompt("Give me a width greater than 0"));
	height = parseInt(prompt("Give me a height than 0"));
	
} while(isNaN(width) && isNaN(height) && width <= 0 && height <= 0);

var rectanglePerimeter = perimeter(width, height);
var rectangleArea = area(width, height);
console.log(rectanglePerimeter);
console.log(rectangleArea);