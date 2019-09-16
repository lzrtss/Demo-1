import { task6 } from '../task6.js';

export default function makeTests6() {

  describe('Task 6: Number Sequence (Shows number sequence that meets condition)', () => {

    describe('Tests with valid numbers', () => {

      it('Success: (7, 60) => \'8, 9, 10, 11, 12, 13, 14\'', () => {
        chai.assert.deepEqual(task6(7, 60), '8, 9, 10, 11, 12, 13, 14');
      });

      it('Success: (1, 100) => \'11\'', () => {
        chai.assert.deepEqual(task6(1, 110), '11');
      });

    });

    describe('Tests with invalid numbers', () => {

      it('Error: Throws \'Wrong data type\' error - 1st argument - String (\'7\', 60)', () => {
        chai.assert.deepEqual(task6('7', 60),
          {
            status: 'failed',
            reason: 'Wrong data type of argument(s): Both arguments should have Number data type.',
          });
      });

      it('Error: Throws \'Wrong data type\' error - 2d argument - String (7, \'60\')', () => {
        chai.assert.deepEqual(task6(7, '60'),
          {
            status: 'failed',
            reason: 'Wrong data type of argument(s): Both arguments should have Number data type.',
          });
      });

      it('Error: Throws \'Wrong value\' error - 1st argument is out of range 1-100 (150, 25)', () => {
        chai.assert.deepEqual(task6(150, 25),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): 1st argument should have value between 1 and 100, 2d argument - between 1 and 1000000.',
          });
      });

      it('Error: Throws \'Wrong value\' error - 2d argument is 0 (5, 0)', () => {
        chai.assert.deepEqual(task6(5, 0),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): 1st argument should have value between 1 and 100, 2d argument - between 1 and 1000000.',
          });
      });

      it('Error: Throws \'Wrong value\' error - 1st argument is 0 (0, 50)', () => {
        chai.assert.deepEqual(task6(0, 50),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): 1st argument should have value between 1 and 100, 2d argument - between 1 and 1000000.',
          });
      });

      it('Error: Throws \'Wrong value\' error - 2d argument is a negative number (5, -50)', () => {
        chai.assert.deepEqual(task6(5, -50),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s): 1st argument should have value between 1 and 100, 2d argument - between 1 and 1000000.',
          });
      });

    });

    describe('Tests with missing numbers', () => {

      it('Error: Throws \'Missing argument(s)\' error - runs without arguments ()', () => {
        chai.assert.deepEqual(task6(),
          {
            status: 'failed',
            reason: 'Missing or invalid argument(s): Should be 2 arguments (positive integers).',
          });
      });

      it('Error: Throws \'Missing argument(s)\' error - runs with 1 argument (25)', () => {
        chai.assert.deepEqual(task6(25),
          {
            status: 'failed',
            reason: 'Missing or invalid argument(s): Should be 2 arguments (positive integers).',
          });
      });

    });

  })

}
