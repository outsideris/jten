const { resolve } = require('path');
const { expect } = require('chai');

const jate = require('../lib');

describe('jate', () => {
  it('should render data to JSON', (done) => {
    const path = resolve('./test/fixtures/example.jate');
    const data = {
      isSuccess: true,
      id: 1234,
      name: 'blah blah',
    };

    jate.__express(path, data, (err, result) => {
      expect(result).to.have.property('status').to.be.true;
      expect(result).to.have.property('data');
      expect(result.data).to.have.property('id').to.equal(1234);
      expect(result.data).to.have.property('name').to.equal('blah blah');
      done();
    });
  });
});
