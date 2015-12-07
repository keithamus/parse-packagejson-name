var parsePackageJsonName = require('./');
var should = require('chai').should();
describe('parsePackageJsonName', function () {

  it('returns an object', function () {
    parsePackageJsonName('').should.be.an('object');
  });

  it('returns an object with name set to the name', function () {
    parsePackageJsonName('foobar').should.deep.equal({
      scope: null,
      fullName: 'foobar',
      projectName: null,
      moduleName: 'foobar',
    });
  });

  it('returns an object with scope, if scope is given', function () {
    parsePackageJsonName('@foobar/bizbang').should.deep.equal({
      scope: 'foobar',
      fullName: 'bizbang',
      projectName: null,
      moduleName: 'bizbang',
    });
  });

  it('returns an object with projectName, if name contains `.`', function () {
    parsePackageJsonName('@foobar/bigproject.littleproject').should.deep.equal({
      scope: 'foobar',
      fullName: 'bigproject.littleproject',
      projectName: 'bigproject',
      moduleName: 'littleproject',
    });
  });

  it('accepts an object as the first agument, and uses the `name` key', function () {
    parsePackageJsonName({ name: '@foobar/bizbang' }).should.deep.equal({
      scope: 'foobar',
      fullName: 'bizbang',
      projectName: null,
      moduleName: 'bizbang',
    });
  });

  it('accepts an object with a scoped `name` including scope, project and module', function () {
    parsePackageJsonName({ name: '@foobar/biz.bang' }).should.deep.equal({
      scope: 'foobar',
      fullName: 'biz.bang',
      projectName: 'biz',
      moduleName: 'bang',
    });
  });

});
