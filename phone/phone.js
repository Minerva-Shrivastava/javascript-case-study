function phone(givenNumber) {

    console.log(givenNumber);
    this.number = function(){
     
        var finalString = givenNumber.replace('/\D/','');
        console.log(finalString);
        return finalString;
    }
}


module.exports = phone;