mocha.setup('bdd');
const assert = chai.assert;

describe('Task 4: Palindrome (Finds palindrome inside \'number\')', () => {

  describe('Tests with valid arguments', () => {

    it('Successful execution with argument \'1234437\' => \'3443\'', () => {
      assert.equal(getPalindrome('1234437'), '3443');
    });

    it('Successful execution with argument \'24123443212466422\' (has 2 palindromes, returns the longest one) => \'12344321\'', () => {
      assert.equal(getPalindrome('24123443212466422'), '12344321');
    });

    it('Successful execution with argument \'23400000422\' (gets palimdrome of 0s) => \'00000\'', () => {
      assert.equal(getPalindrome('23100000422'), '00000');
    });

    it('Successful execution with argument \'123\' (has no palindrome - returns 0) => \'0\'', () => {
      assert.equal(getPalindrome('123'), 0);
    });

    it('Successful execution with \'negative\' argument \'-1234435\' => \'3443\'', () => {
      assert.equal(getPalindrome('-1234435'), '3443');
    });

  });

  describe('Tests with invalid arguments', () => {
    it('Should throw \'Wrong data type\' error (run with argument Infinity)', () => {
      assert.deepEqual(getPalindrome(Infinity),
        {
          status: 'failed',
          reason: 'Wrong data type of argument. Should be String.',
        });
    });

    it('Should throw \'Wrong data type\' error (run with argument NaN)', () => {
      assert.deepEqual(getPalindrome(NaN),
        {
          status: 'failed',
          reason: 'Wrong data type of argument. Should be String.',
        });
    });

    it('Should throw \'Wrong data type\' error (run with Number instead of String - 123437)', () => {
      assert.deepEqual(getPalindrome(123437),
        {
          status: 'failed',
          reason: 'Wrong data type of argument. Should be String.',
        });
    });

    it('Should throw \'Invalid value\' error (run with argument \'abcdef\')', () => {
      assert.deepEqual(getPalindrome('abcdef'),
        { status: 'failed', reason: 'Invalid value. Should be an integer with length <= 100 inside quote marks (String) - \'12344356\'.' });
    });

    it('Should throw \'Invalid value\' error (run with argument \'1221ef\')', () => {
      assert.deepEqual(getPalindrome('1221ef'),
        { status: 'failed', reason: 'Invalid value. Should be an integer with length <= 100 inside quote marks (String) - \'12344356\'.' });
    });

    it('Should throw \'Invalid value\' error (run with argument which has length greater than MAX_LENGTH (100))', () => {
      assert.deepEqual(getPalindrome('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'),
        { status: 'failed', reason: 'Invalid value. Should be an integer with length <= 100 inside quote marks (String) - \'12344356\'.' });
    });
  });

  describe('Tests with missing arguments', () => {
    it('Should throw \'Missing argument\' error (run without arguments)', () => {
      assert.deepEqual(getPalindrome(),
        { status: 'failed', reason: 'Missing argument. There should be 1 argument (empty string is not allowed!).' });
    });

    it('Should throw \'Missing argument\' error (run with empty string)', () => {
      assert.deepEqual(getPalindrome(''),
        { status: 'failed', reason: 'Missing argument. There should be 1 argument (empty string is not allowed!).' });
    });
  });

})


mocha.run();