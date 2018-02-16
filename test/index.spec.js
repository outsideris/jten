const { resolve } = require('path');
const { expect } = require('chai');

const jten = require('../lib');

describe('jten', () => {
  it('should render data to JSON', (done) => {
    const path = resolve('./test/fixtures/example.jten');
    const data = {
      isSuccess: true,
      id: 1234,
      name: 'blah blah',
    };

    jten.__express(path, data, (err, result) => {
      if (err) { return done(err); }

      expect(result).to.have.property('status').to.be.true;
      expect(result).to.have.property('data');
      expect(result.data).to.have.property('id').to.equal(1234);
      expect(result.data).to.have.property('name').to.equal('blah blah');
      return done();
    });
  });

  it('should remove fields when it\'s vaule is undefined or null', (done) => {
    const path = resolve('./test/fixtures/example2.jten');
    const data = {
      isSuccess: false,
      id: undefined,
      name: 'blah blah',
      users: [],
    };

    jten.__express(path, data, (err, result) => {
      if (err) { return done(err); }

      expect(result).to.have.property('status').to.be.false;
      expect(result).to.have.property('data');
      expect(result.data).to.have.not.property('id');
      expect(result.data).to.have.property('name').to.equal('blah blah');
      expect(result.data).to.have.property('users').to.have.lengthOf(0);
      return done(err);
    });
  });
});
