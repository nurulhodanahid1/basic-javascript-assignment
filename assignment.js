// Kilometer to Meter

function kilometerToMetre(kilometer){
    if(kilometer <= 0){
        var error = "Please enter the positive value";
        return error;
    }
    else{
        var metre = kilometer * 1000;
    }
    return metre;
}
var yourKilometer = kilometerToMetre(-33);
console.log(yourKilometer);



// Hotel Cost

function hotelCost(day){
    if(day <= 0){
        err = 'Please enter the positive value';
        return err;
    }
    else if(day <= 10){
        var cost = day * 100;
    }
    else if(day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        var cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        var cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var totalCost = hotelCost(21);
console.log(totalCost);