mocha.setup('bdd');
const assert = chai.assert;

describe('Task 6: Number Sequence (Shows number sequence that meets condition)', () => {

  describe('Tests with valid numbers', () => {

    it('Successful execution with arguments 7 and 60 => \'8, 9, 10, 11, 12, 13, 14\'', () => {
      assert.deepEqual(getNumSequence(7, 60), '8, 9, 10, 11, 12, 13, 14');
    });

    it('Successful execution with arguments 1 and 100 => \'11\'', () => {
      assert.deepEqual(getNumSequence(1, 110), '11');
    });

    it('Successful execution with arguments 0 and 50 => \'\'', () => {
      assert.deepEqual(getNumSequence(0, 50), '');
    });

    it('Successful execution with arguments 5 and 0 => \'\'', () => {
      assert.deepEqual(getNumSequence(5, 0), '0, 1, 2, 3, 4');
    });

  });

  describe('Tests with invalid numbers', () => {

    it('Should throw \'Wrong data type\' error (1st argument - String)', () => {
      assert.deepEqual(getNumSequence('7', 60),
        {
          status: 'failed',
          reason: 'Wrong data type of argument(s): Both arguments should have Number data type.',
        });
    });

    it('Should throw \'Wrong data type\' error (2d argument - String)', () => {
      assert.deepEqual(getNumSequence(7, '60'),
        {
          status: 'failed',
          reason: 'Wrong data type of argument(s): Both arguments should have Number data type.',
        });
    });

    it('Should throw \'Wrong value\' error (1st argument is out of range (0-100))', () => {
      assert.deepEqual(getNumSequence(150, 25),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s): 1st argument should have value between 0 and 100, 2d argument should be positive number.',
        });
    });

    it('Should throw \'Wrong value\' error (2d number is negative)', () => {
      assert.deepEqual(getNumSequence(5, -50),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s): 1st argument should have value between 0 and 100, 2d argument should be positive number.',
        });
    });

  });

  describe('Tests with missing numbers', () => {

    it('Should throw \'Missing argument(s)\' error (run without arguments)', () => {
      assert.deepEqual(getNumSequence(),
        {
          status: 'failed',
          reason: 'Missing argument(s): Should be 2 arguments (numbers greater than 0).',
        });
    });

    it('Should throw \'Missing argument(s)\' error (run with 1 arguments)', () => {
      assert.deepEqual(getNumSequence(25),
        {
          status: 'failed',
          reason: 'Missing argument(s): Should be 2 arguments (numbers greater than 0).',
        });
    });

  });

})


mocha.run();