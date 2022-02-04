function Recktangle(x1,y1,x2,y2) {//constructor function
    this.x1 = x1; //properties - coordinates of recktangle на плоскости
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.toString = function(){ //method
        return "This recktangle size is " + this.x1 + this.y1 + this.x2 + this.y2; 
    }
    this.valueOf = function(){ //method, which return result of perinmeter
        let perimeter = ((this.x2 - this.x1) + (this.y1 - this.y2)) * 2;
        return perimeter;
    }
}
let getPer = new Recktangle(1, 4, 4,2);//создаем новый объект
console.log(getPer.valueOf());
console.log(getPer.toString());