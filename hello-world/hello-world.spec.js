var HelloWorld = require('./hello-world');

describe('Hello World', function () {
  var helloWorld = new HelloWorld();

  it('should say hello world', function () {
    const expected = 'Hello, World!';
    console.log(helloWorld.hello());
    expect(helloWorld.hello()).toEqual(expected);
  });

  it('should has length of hello world as 13', function() {
    const expected = 'Hello, World!';
    console.log(helloWorld.hello().length);
    expect(helloWorld.hello().length).toEqual(13);
  }) ;
});
