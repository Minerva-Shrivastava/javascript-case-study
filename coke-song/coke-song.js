var cokeSong = function(){}

cokeSong.prototype.verse = function(number) {
    
    var numberMinusOne = number - 1;
    var finalString ;

    if(number > 1 &&  numberMinusOne > 1){   
        finalString = number+' cans of coke in the box, '+ number + ' cans of coke.\n'+
        'Take one down and pass it around, '+numberMinusOne+' cans of coke in the box.\n'; 
    }
    if(number > 1 && numberMinusOne === 1){
        finalString = number+' cans of coke in the box, '+ number + ' cans of coke.\n'+
        'Take one down and pass it around, '+numberMinusOne+' can of coke in the box.\n'; 
    }
    if(number === 1 ){
        finalString = number+' can of coke in the box, '+ number + ' can of coke.\n'+
        'Take it down and pass it around, no more cans of coke in the box.\n'; 
    }
    if(number === 0)
        finalString = 'No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';

    //console.log(finalString);

    return finalString;
        
}

cokeSong.prototype.sing = function(startNumber, endNumber){
    var finalString = '';
    var noMoreCans = 'Take it down and pass it around, no more cans of coke in the box.\nNo more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
    if(isNaN(startNumber)){
        startNumber = 99;
    }
    if(isNaN(endNumber)){
        endNumber = 1;
    }
    for(var i = startNumber; i> endNumber; i--){
        var startNumberMinusOne = i-1;
        var cansInBox = 'cans';
        if(startNumberMinusOne <= 1) {
            var cansInBox = 'can';
        }

        finalString += i+' '+cansInBox+' of coke in the box, '+ i + ' '+cansInBox+' of coke.\nTake one down and pass it around, '+startNumberMinusOne+' '+cansInBox+' of coke in the box.\n'; 
        
    }
    finalString += noMoreCans;
    console.log(finalString);
    return finalString;
}

module.exports = cokeSong;