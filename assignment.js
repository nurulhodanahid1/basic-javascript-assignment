// https://github.com/nurulhodanahid1/basic-javascript-assignment

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
var yourKilometer = kilometerToMetre(3);
console.log('Meter: ',yourKilometer,'m');



// Budget Calculator

function budgetCalculator(totalWatch, totalMobile, totalLaptop){
    var watchPrice = 50;
    var totalWatchPrice = watchPrice * totalWatch;

    var mobilePrice = 100;
    var totalMobilePrice = mobilePrice * totalMobile;

    var laptopPrice = 500;
    var totalLaptopPrice = laptopPrice * totalLaptop;

    var totalMoney = totalWatchPrice + totalMobilePrice + totalLaptopPrice;

    return totalMoney;
}
let watch = 2;
let mobile = 2;
let laptop = 2;
var result = budgetCalculator(watch, mobile, laptop);
console.log('Budget: ',result,'tk');



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
var totalDay = 34;
var totalCost = hotelCost(totalDay);
console.log('Hotel cost: ',totalCost,'tk');



// Mega Friend

function megaFriend(name){
    var length = 0;
    for (var i = 0; i < name.length; i++) {
        if (name[i].length > length){
        var length = name[i].length;
        var longestName = name[i];
        }
    }
    return longestName;
}
var fName = ['Nahid Sarkar', 'Sazzat Hosssain', 'MI RaNa', 'Sajib Khan'];
var output = megaFriend(fName);
console.log("Mega Friend: ",output);