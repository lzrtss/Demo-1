mocha.setup('bdd');
const assert = chai.assert;

describe('Task 5: Lucky Tickets (Counts lucky tickets from tickets range)', () => {

  describe('Tests with valid arguments', () => {

    it('Successful execution: \'Complex Method\' won ({ min: 1, max: 1000})', () => {
      assert.deepEqual(task5({ min: 1, max: 1000 }),
        { winMethod: 'Complex Method', simpleCount: 0, complexCount: 54 });
    });

    it('Successful execution: \'Draw\' ({ min: 0, max: 999999 })', () => {
      assert.deepEqual(task5({ min: 000000, max: 999999 }),
        { winMethod: 'Draw', simpleCount: 55252, complexCount: 55252 });
    });

    it('Successful execution: \'Simple Method\' won ({ min: 123456, max: 654321 })', () => {
      assert.deepEqual(task5({ min: 123456, max: 654321 }),
        { winMethod: 'Simple Method', simpleCount: 31607, complexCount: 30213 });
    });

  });

  describe('Tests with invalid or missing arguments', () => {

    it('Should throw \'Invalid or missing arguments\' error because of using String as \'min\' value: { min: \'100\', max: 5000 }', () => {
      assert.deepEqual(task5('100', 5000),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

    it('Should throw \'Invalid or missing arguments\' error because of using NaN as \'max\' value: { min: 100, max: NaN }', () => {
      assert.deepEqual(task5(100, NaN),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

    it('Should throw \'Invalid or missing arguments\' error because of missing \'min\' and \'max\' properties: { }', () => {
      assert.deepEqual(task5({}),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

    it('Should throw \'Invalid or missing arguments\' error because of missing \'min\' property: { max: 555555 }', () => {
      assert.deepEqual(task5({ max: 555555 }),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

    it('Should throw \'Invalid or missing arguments\' error because of missing \'max\' property: { min: 123456 }', () => {
      assert.deepEqual(task5({ min: 123456 }),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

    it('Should throw \'Invalid or missing arguments\' error because of execution without any arguments ', () => {
      assert.deepEqual(task5(),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

    it('Should throw \'Invalid or missing arguments\' error because of using negative number as \'min\' value: { min: -5, max: 25 }', () => {
      assert.deepEqual(task5({ min: -5, max: 25 }),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

    it('Should throw \'Invalid or missing arguments\' error because of using float number as \'max\' value: { min: 15, max: 25.5 }', () => {
      assert.deepEqual(task5({ min: 15, max: 25.5 }),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

    it('Should throw \'Invalid or missing arguments\' error because of using number out of range: { min: 5, max: 99999999 }', () => {
      assert.deepEqual(task5({ min: 5, max: 99999999 }),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

    it('Should throw \'Invalid or missing arguments\' error because \'min\' > \'max\': { min: 11111, max: 222 }', () => {
      assert.deepEqual(task5({ min: 11111, max: 222 }),
        {
          status: 'failed',
          reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
        });
    });

  });

})


mocha.run();