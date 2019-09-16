import { task7 } from '../task7.js';

export default function makeTests7() {

  describe('Task 7: Fibonacci Number Sequence (Shows Fibonacci number sequence in range)', () => {

    describe('Tests with valid arguments', () => {

      it('Success: returns Fibonacci sequence between numbers 4 and 35 => [5, 8, 13, 21, 34]', () => {
        chai.assert.deepEqual(task7({ min: 4, max: 35, }), [5, 8, 13, 21, 34]);
      });

      it('Success: returns Fibonacci sequence between numbers 100 and 10000 => [144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]', () => {
        chai.assert.deepEqual(task7({ min: 100, max: 10000, }), [144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]);
      });

      it('Success: returns Fibonacci sequence of 10 integers => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', () => {
        chai.assert.deepEqual(task7({ length: 10, }), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
      });

    });

    describe('Tests with invalid arguments', () => {

      it('Error: Throws \'Wrong value\' error - one argument has value \'NaN\' ({ min: NaN, max: 35, })', () => {
        chai.assert.deepEqual(task7({ min: NaN, max: 35, }),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
          });
      });

      it('Error: Throws \'Wrong value\' error - one property has value as a negative number ({ min: -1, max: 35 })', () => {
        chai.assert.deepEqual(task7({ min: -1, max: 35 }),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
          });
      });


      it('Error: Throws \'Wrong value\' error - length = 0 ({ length: 0, })', () => {
        chai.assert.deepEqual(task7({ length: 0, }),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
          });
      });

      it('Error: Throws \'Wrong value\' error - one property\'s value is greater than 1 000 000 ({ min: 10, max: 10000000 })', () => {
        chai.assert.deepEqual(task7({ min: 10, max: 10000000 }),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
          });
      });

      it('Error: Throws \'Wrong value\' error - one property\'s value is float number ({ min: 10.5, max: 1000 })', () => {
        chai.assert.deepEqual(task7({ min: 10.5, max: 1000 }),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
          });
      });

      it('Error: Throws \'Wrong value\' error - value of \'min\' property is greater than value of \'max\' property ({ min: 1000, max: 10 })', () => {
        chai.assert.deepEqual(task7({ min: 1000, max: 10 }),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
          });
      });

      it('Error: Throws \'Wrong value\' error - runs with an array as argument ([1000, 10])', () => {
        chai.assert.deepEqual(task7([1000, 10]),
          {
            status: 'failed',
            reason: 'Wrong data type of argument(s): Argument should be an Object, all properties should be integers.',
          });
      });

    });

    describe('Tests with missing arguments', () => {

      it('Error: Throws \'Wrong value\' error - runs without arguments ()', () => {
        chai.assert.deepEqual(task7(),
          {
            status: 'failed',
            reason: 'Argument(s) error: Should be an object with EITHER 2 properties \'min\' or \'max\' OR 1 property \'length\'.',
          });
      });

      it('Error: Throws \'Wrong value\' error - runs with an empty object ({})', () => {
        chai.assert.deepEqual(task7({}),
          {
            status: 'failed',
            reason: 'Argument(s) error: Should be an object with EITHER 2 properties \'min\' or \'max\' OR 1 property \'length\'.',
          });
      });

      it('Error: Throws \'Wrong value\' error - 1 missing property ({ min: 25 })', () => {
        chai.assert.deepEqual(task7({ min: 25 }),
          {
            status: 'failed',
            reason: 'Argument(s) error: Should be an object with EITHER 2 properties \'min\' or \'max\' OR 1 property \'length\'.',
          });
      });

    });

  })

}
