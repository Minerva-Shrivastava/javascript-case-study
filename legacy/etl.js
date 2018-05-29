var ETL = function() {}

ETL.prototype.transform = function(old){
    var transformObj = {};
    Object.keys(old).forEach(function (key){
        old[key].forEach(function(val){
            transformObj[val.toLowerCase()] = parseInt(key);
        });
    });
    return transformObj;
}
module.exports = ETL;