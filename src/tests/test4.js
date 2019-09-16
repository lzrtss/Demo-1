import { task4 } from '../task4.js';

export default function makeTests4() {

  describe('Task 4: Palindrome (Finds palindrome inside \'number\')', () => {

    describe('Tests with valid arguments', () => {

      it('Success: Finds palindrome in number \'1234437\' => \'3443\'', () => {
        chai.assert.equal(task4('1234437'), '3443');
      });

      it('Success: Finds palindrome in number \'24123443212466422\' (has 2 palindromes, returns the longest one) => \'12344321\'', () => {
        chai.assert.equal(task4('24123443212466422'), '12344321');
      });

      it('Success: Finds palindrome of zeros in number \'23400000422\' => \'00000\'', () => {
        chai.assert.equal(task4('23100000422'), '00000');
      });

      it('Success: Does not find palindrome in number \'123\' => returns 0', () => {
        chai.assert.equal(task4('123'), 0);
      });

      it('Success: Finds palindrome in negative number \'-1234435\' => \'3443\'', () => {
        chai.assert.equal(task4('-1234435'), '3443');
      });

    });

    describe('Tests with invalid arguments', () => {
      it('Error: Throws \'Wrong data type\' error (runs with argument Infinity)', () => {
        chai.assert.deepEqual(task4(Infinity),
          {
            status: 'failed',
            reason: 'Wrong data type of argument. Should be String.',
          });
      });

      it('Error: Throws \'Wrong data type\' error (runs with argument NaN)', () => {
        chai.assert.deepEqual(task4(NaN),
          {
            status: 'failed',
            reason: 'Wrong data type of argument. Should be String.',
          });
      });

      it('Error: Throws \'Wrong data type\' error (runs with Number instead of String - 123437)', () => {
        chai.assert.deepEqual(task4(123437),
          {
            status: 'failed',
            reason: 'Wrong data type of argument. Should be String.',
          });
      });

      it('Error: Throws \'Invalid value\' error (runs with argument \'abcdef\')', () => {
        chai.assert.deepEqual(task4('abcdef'),
          { status: 'failed', reason: 'Invalid value. Should be an integer with length <= 100 inside quote marks (String) - \'12344356\'.' });
      });

      it('Error: Throws \'Invalid value\' error (runs with argument \'1221ef\')', () => {
        chai.assert.deepEqual(task4('1221ef'),
          { status: 'failed', reason: 'Invalid value. Should be an integer with length <= 100 inside quote marks (String) - \'12344356\'.' });
      });

      it('Error: Throws \'Invalid value\' error (runs with argument which has length greater than 100 chars)', () => {
        chai.assert.deepEqual(task4('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'),
          { status: 'failed', reason: 'Invalid value. Should be an integer with length <= 100 inside quote marks (String) - \'12344356\'.' });
      });
    });

    describe('Tests with missing arguments', () => {
      it('Error: Throws \'Missing argument\' error (runs without arguments)', () => {
        chai.assert.deepEqual(task4(),
          { status: 'failed', reason: 'Missing argument. There should be 1 argument (empty string is not allowed!).' });
      });

      it('Error: Throws \'Missing argument\' error (runs with empty string as an argument)', () => {
        chai.assert.deepEqual(task4(''),
          { status: 'failed', reason: 'Missing argument. There should be 1 argument (empty string is not allowed!).' });
      });
    });

  })


}
