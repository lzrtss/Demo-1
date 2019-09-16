import { task5 } from '../task5.js';

export default function makeTests5() {

  describe('Task 5: Lucky Tickets (Counts lucky tickets from tickets range)', () => {

    describe('Tests with valid arguments', () => {

      it('Success: \'Complex Method\' won ({ min: 1, max: 1000})', () => {
        chai.assert.deepEqual(task5({ min: 1, max: 1000 }),
          { winMethod: 'Complex Method', simpleCount: 0, complexCount: 54 });
      });

      it('Success: \'Draw\' ({ min: 0, max: 999999 })', () => {
        chai.assert.deepEqual(task5({ min: 0, max: 999999 }),
          { winMethod: 'Draw', simpleCount: 55252, complexCount: 55252 });
      });

      it('Success: \'Simple Method\' won ({ min: 123456, max: 654321 })', () => {
        chai.assert.deepEqual(task5({ min: 123456, max: 654321 }),
          { winMethod: 'Simple Method', simpleCount: 31607, complexCount: 30213 });
      });

    });

    describe('Tests with invalid or missing arguments', () => {

      it('Error: Throws \'Invalid or missing arguments\' error - using String as \'min\' value: { min: \'100\', max: 5000 }', () => {
        chai.assert.deepEqual(task5('100', 5000),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

      it('Error: Throws \'Invalid or missing arguments\' error - using NaN as \'max\' value: { min: 100, max: NaN }', () => {
        chai.assert.deepEqual(task5(100, NaN),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

      it('Error: Throws \'Invalid or missing arguments\' error - missing \'min\' and \'max\' properties: { }', () => {
        chai.assert.deepEqual(task5({}),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

      it('Error: Throws \'Invalid or missing arguments\' error - missing \'min\' property: { max: 555555 }', () => {
        chai.assert.deepEqual(task5({ max: 555555 }),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

      it('Error: Throws \'Invalid or missing arguments\' error - missing \'max\' property: { min: 123456 }', () => {
        chai.assert.deepEqual(task5({ min: 123456 }),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

      it('Error: Throws \'Invalid or missing arguments\' error - execution without any arguments ', () => {
        chai.assert.deepEqual(task5(),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

      it('Error: Throws \'Invalid or missing arguments\' error - using negative number as \'min\' value: { min: -5, max: 25 }', () => {
        chai.assert.deepEqual(task5({ min: -5, max: 25 }),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

      it('Error: Throws \'Invalid or missing arguments\' error - using float number as \'max\' value: { min: 15, max: 25.5 }', () => {
        chai.assert.deepEqual(task5({ min: 15, max: 25.5 }),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

      it('Error: Throws \'Invalid or missing arguments\' error - using number out of range (0-999999): { min: 5, max: 99999999 }', () => {
        chai.assert.deepEqual(task5({ min: 5, max: 99999999 }),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

      it('Error: Throws \'Invalid or missing arguments\' error - \'min\' > \'max\': { min: 11111, max: 222 }', () => {
        chai.assert.deepEqual(task5({ min: 11111, max: 222 }),
          {
            status: 'failed',
            reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
          });
      });

    });

  })

}
