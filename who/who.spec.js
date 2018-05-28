
var Who = require('./who');

describe('Name', function () {
  var who = new Who();

  it('gives one to you if no parameter given', function () {
    console.log(who.name());
    expect(who.name()).toEqual('One for you, one for me.');
  });

  it('gives one to Alice if \'Alice\' is given', function () {
    console.log(who.name('Alice'));
    expect(who.name('Alice')).toEqual('One for Alice, one for me.');
  });

  it('gives one to Minerva if \'Minerva\' is given', function () {
    console.log(who.name('Minerva'));
    expect(who.name('Minerva')).toEqual('One for Minerva, one for me.');
  });
});
