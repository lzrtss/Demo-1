import { task1 } from '../task1.js';

export default function makeTests1() {

  describe('Task 1: Chess Board (Draws chess board)', () => {

    describe('Tests with valid arguments', () => {

      it('Success: Draws chess board of size 2x2 with symbol \'*\' (2, 2, \'*\')', () => {
        chai.assert.equal(task1(2, 2, '*'), '* \n *\n');
      });

      it('Success: Draws chess board of size 6x6 with symbol \'+\' (6, 6, \'+\')', () => {
        chai.assert.deepEqual(task1(6, 6, '+'),
          '+ + + \n + + +\n+ + + \n + + +\n+ + + \n + + +\n');
      });

      it('Success: Draws chess board of size 10x10 with symbol \'x\' (10, 10, \'x\')', () => {
        chai.assert.deepEqual(task1(10, 10, 'x'),
          'x x x x x \n x x x x x\nx x x x x \n x x x x x\nx x x x x \n x x x x x\nx x x x x \n x x x x x\nx x x x x \n x x x x x\n');
      });

    });

    describe('Tests with invalid arguments', () => {

      it('Error: Throws \'Wrong value\' error because of using float as argument (6.5, 6, \'*\')', () => {
        chai.assert.deepEqual(task1(6.5, 6, '*'),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s). 1st and 2d arguments should be EVEN integers between 2 and 50; 3d argument should contain of 1 symbol inside quotes.',
          });
      });

      it('Error: Throws \'Wrong value\' error because of using odd number as argument (5, 5, \'*\')', () => {
        chai.assert.deepEqual(task1(5, 5, '*'),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s). 1st and 2d arguments should be EVEN integers between 2 and 50; 3d argument should contain of 1 symbol inside quotes.',
          });
      });

      it('Error: Throws \'Wrong value\' error because of using negative number as argument (-6, 6, \'*\')', () => {
        chai.assert.deepEqual(task1(-6, 6, '*'),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s). 1st and 2d arguments should be EVEN integers between 2 and 50; 3d argument should contain of 1 symbol inside quotes.',
          });
      });

      it('Error: Throws \'Wrong value\' error because of using numbers above limit of 50 (100, 100, \'*\')', () => {
        chai.assert.deepEqual(task1(100, 100, '*'),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s). 1st and 2d arguments should be EVEN integers between 2 and 50; 3d argument should contain of 1 symbol inside quotes.',
          });
      });

      it('Error: Throws \'Wrong value\' error because of using 2-chars symbol (10, 10, \'**\')', () => {
        chai.assert.deepEqual(task1(10, 10, '**'),
          {
            status: 'failed',
            reason: 'Wrong value of argument(s). 1st and 2d arguments should be EVEN integers between 2 and 50; 3d argument should contain of 1 symbol inside quotes.',
          });
      });

      it('Error: Throws \'Wrong data type\' error because of using a string as \'height\' or \'width\' argument (\'5\', 5, \'*\')', () => {
        chai.assert.deepEqual(task1('5', 5, '*'),
          { status: 'failed', reason: 'Wrong data type of argument(s). There should be 3 arguments: Number, Number and String.' });
      });

    });

    describe('Tests with missing arguments', () => {

      it('Error: Throws \'Missing argument(s)\' error because of 2 missing arguments (5)', () => {
        chai.assert.deepEqual(task1(5),
          {
            status: 'failed',
            reason: 'Missing or invalid argument(s). There should be 3 arguments. 0 empty string or non-digits are incorrect values.',
          });
      });

      it('Error: Throws \'Missing argument(s)\' error because of 1 missing argument (5, 5)', () => {
        chai.assert.deepEqual(task1(5, 5),
          {
            status: 'failed',
            reason: 'Missing or invalid argument(s). There should be 3 arguments. 0 empty string or non-digits are incorrect values.',
          });
      });

      it('Error: Throws \'Missing argument(s)\' error because of all missing arguments ()', () => {
        chai.assert.deepEqual(task1(),
          {
            status: 'failed',
            reason: 'Missing or invalid argument(s). There should be 3 arguments. 0 empty string or non-digits are incorrect values.',
          });
      });

      it('Error: Throws \'Missing argument(s)\' error because of using 0 as an argument (0, 10, \'*\')', () => {
        chai.assert.deepEqual(task1(0, 10, '*'),
          {
            status: 'failed',
            reason: 'Missing or invalid argument(s). There should be 3 arguments. 0 empty string or non-digits are incorrect values.',
          });
      });

    });

  });

}
