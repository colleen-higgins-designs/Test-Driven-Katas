const { expect } = require('chai');
const wrap = require('./wrap');

describe('function wrap', function() {
  it('is a function', function() {
    expect(wrap).to.be.a('function');
  });
  it('returns a string', function() {
    expect(wrap('something', 1)).to.be.a('string');
  });
  it('returns an empty string if an empty string is provided', function() {
    expect(wrap('', 1)).to.equal('');
  });
  it('if the string length is less than col number, it returns the string', function() {
    const string = 'this is a string';
    const col = 20;
    expect(wrap(string, col)).to.equal(string);
  });
  it('with one line break, the string splits at the right col', function() {
    const string = 'this is a cat';
    const col = 7;
    expect(wrap(string, col)).to.equal('this is\na cat');
  });
  it('returns a string with multiple line breaks', function() {
    const string =
      'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';
    const col = 20;
    expect(wrap(string, col)).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );
  });
});
