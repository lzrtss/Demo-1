mocha.setup('bdd');
const assert = chai.assert;

describe('Task 1: Chess Board (Draws chess board)', () => {

  describe('Tests with valid arguments', () => {

    const testsList = [
      {
        msg: 'Draws chess board of size 3x3 with symbol \'*\'',
        args: [3, 3, '*'],
        res: '* * * \n * * *\n* * * \n',
      },
      {
        msg: 'Draws chess board of size 6x6 with symbol \'+\'',
        args: [6, 6, '+'],
        res: '+ + + + + + \n + + + + + +\n+ + + + + + \n + + + + + +\n+ + + + + + \n + + + + + +\n',
      },
      {
        msg: 'Draws chess board of size 10x10 with symbol \'x\'',
        args: [10, 10, 'x'],
        res: 'x x x x x x x x x x \n x x x x x x x x x x\nx x x x x x x x x x \n x x x x x x x x x x\nx x x x x x x x x x \n x x x x x x x x x x\nx x x x x x x x x x \n x x x x x x x x x x\nx x x x x x x x x x \n x x x x x x x x x x\n'
      },
    ];

    testsList.forEach(el => {
      it(el.msg, () => {
        assert.equal(task1(...el.args), el.res);
      });
    });

  });

  describe('Tests with invalid arguments', () => {

    it('Should throw \'Wrong value\' error because of using float as argument', () => {
      assert.deepEqual(task1(5.5, 5, '*'),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s). 1st and 2d arguments should be integers between 1 and 50; 3d argument should contain of 1 symbol inside quotes.',
        });
    });

    it('Should throw \'Wrong value\' error because of using negative number as argument', () => {
      assert.deepEqual(task1(-5, 5, '*'),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s). 1st and 2d arguments should be integers between 1 and 50; 3d argument should contain of 1 symbol inside quotes.',
        });
    });

    it('Should throw \'Wrong value\' error because of using numbers above limit', () => {
      assert.deepEqual(task1(100, 100, '*'),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s). 1st and 2d arguments should be integers between 1 and 50; 3d argument should contain of 1 symbol inside quotes.',
        });
    });

    it('Should throw \'Wrong value\' error because of using 2-chars symbol ("**")', () => {
      assert.deepEqual(task1(10, 10, '**'),
        {
          status: 'failed',
          reason: 'Wrong value of argument(s). 1st and 2d arguments should be integers between 1 and 50; 3d argument should contain of 1 symbol inside quotes.',
        });
    });

    it('Should throw \'Wrong data type\' error because of using a string as \'height\' or \'width\' argument', () => {
      assert.deepEqual(task1('5', 5, '*'),
        { status: 'failed', reason: 'Wrong data type of argument(s). There should be 3 arguments: Number, Number and String.' });
    });

  });

  describe('Tests with missing arguments', () => {

    it('Should throw \'Missing argument(s)\' error because of 2 missing arguments', () => {
      assert.deepEqual(task1(5),
        {
          status: 'failed',
          reason: 'Missing argument(s). There should be 3 arguments. 0 or empty string are incorrect values.',
        });
    });

    it('Should throw \'Missing argument(s)\' error because of 1 missing argument', () => {
      assert.deepEqual(task1(5, 5),
        {
          status: 'failed',
          reason: 'Missing argument(s). There should be 3 arguments. 0 or empty string are incorrect values.',
        });
    });

    it('Should throw \'Missing argument(s)\' error because of all missing arguments', () => {
      assert.deepEqual(task1(),
        {
          status: 'failed',
          reason: 'Missing argument(s). There should be 3 arguments. 0 or empty string are incorrect values.',
        });
    });

    it('Should throw \'Missing argument(s)\' error because of using 0 as an argument', () => {
      assert.deepEqual(task1(0, 10, '*'),
        {
          status: 'failed',
          reason: 'Missing argument(s). There should be 3 arguments. 0 or empty string are incorrect values.',
        });
    });

  });

});

mocha.run();