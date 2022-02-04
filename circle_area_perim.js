r = 2.6; // radius

function calculateArea(radius) {
	return Math.PI * (radius * radius); //радиус в квадрате
}
function calculatePerimeter(radius) {
	return 2 * Math.PI * radius;
}
let area = calculateArea(r);
console.log(area);

let perimeter = calculatePerimeter(r);
console.log(perimeter);