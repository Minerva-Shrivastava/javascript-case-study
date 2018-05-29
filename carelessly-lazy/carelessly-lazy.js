var lazyGuy = function(){}

lazyGuy.prototype.hey = function(conversation) {

    var yell='Whoa, chill out!';
    var anythingElse = 'Whatever.';

    // var whatever_array = conversation.match(new RegExp(/[a-zA-Z-,. !'?][0-9]/g));
    // console.log(new RegExp(/[a-zA-Z-,. !'?][0-9]^[?]/g).test(conversation));
    // if(new RegExp(/[a-zA-Z-,. !'?][0-9]^[?]/g).test(conversation))
    //     return anythingElse;

    
    if(new RegExp(/[A-Z !%^*@#$()0-9]/g).test(conversation))
        return yell;
    if(conversation.length -1 == '?')
        return 

    

}
module.exports = lazyGuy;