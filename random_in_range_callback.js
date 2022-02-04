function random(min, max, delay, callback) {
    if(min<max){ //checking if value of min is greater than max

        //creates random number in range from min to max. Сначала определяем диапозон, поэтому вычитаем max-min. Т.к. 
         
        var data = Math.floor(Math.random()*(max-min))+min; 
        var error = "You've got";
        setTimeout(function(){ // Устанавливаем таймер, используя параметр delay
            callback(error, data);
        }, delay); 
    }
    else {
        var data = "error";
        var error = "You've got an";
        setTimeout(function(){
            callback(error, data);
        }, delay);
    }
};
  
random(100, 1, 2000, function(error,data){
    console.log(error + " " + data);
});