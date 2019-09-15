mocha.setup('bdd');
const assert = chai.assert;

describe('Task 7: Fibonacci Number Sequence (Shows Fibonacci number sequence in range)', () => {

  describe('Tests with valid arguments', () => {

    it('Successfull execution with arguments: should return Fibonacci sequence between numbers 4 and 35 => returns  [5, 8, 13, 21, 34]', () => {
      assert.deepEqual(showFiboSequence({ min: 4, max: 35, }),
        [5, 8, 13, 21, 34]);
    });

    it('Successfull execution with arguments: should return Fibonacci sequence of 10 integers => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
      assert.deepEqual(showFiboSequence({ length: 10, }),
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('Successfull execution with arguments: should return empty string (length = 0)', () => {
      assert.deepEqual(showFiboSequence({ length: 0, }), [0]);
    });

  });

  describe('Tests with invalid arguments', () => {

    it('Should throw \'Wrong value\' error (one argument has value \'NaN\')', () => {
      assert.deepEqual(showFiboSequence({ min: NaN, max: 35, }),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
        });
    });

    it('Should throw \'Wrong value\' error (one argument\'s value is negative number)', () => {
      assert.deepEqual(showFiboSequence({ min: -1, max: 35 }),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
        });
    });

    it('Should throw \'Wrong value\' error (one argument\'s value is greater than 1 000 000)', () => {
      assert.deepEqual(showFiboSequence({ min: 10, max: 10000000 }),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
        });
    });

    it('Should throw \'Wrong value\' error (one argument\'s value is float number)', () => {
      assert.deepEqual(showFiboSequence({ min: 10.5, max: 1000 }),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
        });
    });

    it('Should throw \'Wrong value\' error (value of \'min\' argument greater than value of \'max\' argument)', () => {
      assert.deepEqual(showFiboSequence({ min: 1000, max: 10 }),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
        });
    });

    it('Should throw \'Wrong value\' error (called with an array as argument)', () => {
      assert.deepEqual(showFiboSequence([1000, 10]),
        {
          status: 'failed',
          reason: 'Wrong data type of argument(s): Argument should be an Object, all properties should be integers.',
        });
    });

  });

  describe('Tests with missing arguments', () => {

    it('Should throw \'Wrong value\' error (called without arguments)', () => {
      assert.deepEqual(showFiboSequence(),
        {
          status: 'failed',
          reason: 'Argument(s) error: Should be an object with EITHER 2 properties \'min\' or \'max\' OR 1 property \'length\'.',
        });
    });

    it('Should throw \'Wrong value\' error (called with empty object - {})', () => {
      assert.deepEqual(showFiboSequence({}),
        {
          status: 'failed',
          reason: 'Argument(s) error: Should be an object with EITHER 2 properties \'min\' or \'max\' OR 1 property \'length\'.',
        });
    });

    it('Should throw \'Wrong value\' error (called with 1 missing argument)', () => {
      assert.deepEqual(showFiboSequence({ min: 25 }),
        {
          status: 'failed',
          reason: 'Argument(s) error: Should be an object with EITHER 2 properties \'min\' or \'max\' OR 1 property \'length\'.',
        });
    });

  });

})


mocha.run();