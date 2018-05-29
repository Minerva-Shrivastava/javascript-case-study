var lazyGuy = function(){}

lazyGuy.prototype.hey = function(conversation) {

    var yell='Whoa, chill out!';
    var anythingElse = 'Whatever.';

    var whatever_array = conversation.match(new RegExp(/[a-zA-Z-,. !'?][0-9]/g));
    console.log(new RegExp(/[a-zA-Z-,. !'?][0-9]^[?]/g).test(conversation));
    if(new RegExp(/[a-zA-Z-,. !'?][0-9]^[?]/g).test(conversation))
        return anythingElse;

    
    var yell_array = conversation.match(new RegExp(/^[a-z][A-Z !%^*@#$()0-9]/g));
    if(new RegExp(/^[a-z][A-Z !%^*@#$()0-9]/g).test(conversation))
        return yell;
    
    

}
module.exports = lazyGuy;