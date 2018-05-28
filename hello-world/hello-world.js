function HelloWorld(){
    this.hello = function (){
        return 'Hello, World!';
    }
    
}// can be a var, fn, or object

module.exports = HelloWorld; // Every JS file is a module
