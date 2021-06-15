function kilometerToMetre(kilometer){
    if(kilometer <= 0){
        var error = "Please enter the positive value";
        return error;
    }
    else{
        var metre = kilometer * 1000;
        return metre;
    }
}
var yourKilometer = kilometerToMetre(22);
console.log(yourKilometer);