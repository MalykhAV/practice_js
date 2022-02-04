const BIG_TYPE = 1;
const M_TYPE = 2;
const S_TYPE = 3;

var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

ParkingSystem.prototype.addCar = function(carType) {
    if(carType === BIG_TYPE || carType === M_TYPE || carType === S_TYPE){
        
        if(carType === BIG_TYPE && this.big - 1 >= 0){
            this.big -= 1;
            return true;
        }
        else if(carType === M_TYPE && this.medium -1 >= 0){
            this.medium -= 1;
            return true;
        }
        else if(carType === S_TYPE && this.small - 1 >= 0){
            this.small -= 1;
            return true;
        }
        else {
            return false;
        }
    }
};
let garage = new ParkingSystem(1,1,0);
console.log(garage.addCar(2));
//console.log(garage.addCar(2));
//console.log(garage.addCar(3));

console.log(garage.addCar(2));
// console.log(garage.addCar(2));
// console.log(garage.addCar(2));
// console.log(garage.addCar(2));

