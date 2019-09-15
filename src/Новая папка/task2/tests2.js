mocha.setup('bdd');
const assert = chai.assert;

describe('Task 2: Envelopes Analysis (Checks is it is possibe to put one envelope inside another)', () => {

  describe('Tests with valid arguments', function () {

    it('Successfull execution: first envelope can be put inside second one without rotation. Env1 = { a: 10, b: 15 }, env2 = { c: 12, d: 20 }', () => {
      assert.deepEqual(task2({ a: 10, b: 15, }, { c: 12, d: 20, }), 1);
    });

    it('Successfull execution: second envelope can be put inside first one without rotation. Env1 = { a: 10, b: 15 }, env2 = { c: 8, d: 12 }', () => {
      assert.deepEqual(task2({ a: 10, b: 15, }, { c: 8, d: 12, }), 2);
    });

    it('Successfull execution: first envelope can be put inside second one using rotation. Env1 = { a: 2.2, b: 16 }, env2 = { c: 10, d: 15 }', () => {
      assert.deepEqual(task2({ a: 2.2, b: 16, }, { c: 10, d: 15, }), 1);
    });

    it('Successfull execution: second envelope can be put inside first one using rotation. Env1 = { a: 20, b: 18 }, env2 = { c: 5, d: 21.5 }', () => {
      assert.deepEqual(task2({ a: 20, b: 18, }, { c: 5, d: 21.5, }), 2);
    });

    it('Successfull execution: mentioned envelopes can not be put inside of each other. Env1 = { a: 10, b: 15 }, env2 = { c: 18, d: 8 }', () => {
      assert.deepEqual(task2({ a: 10, b: 15, }, { c: 18, d: 8, }), 0);
    });

    it('Successfull execution: mentioned envelopes have equal sizes and can not be put inside of each other. Env1 = { a: 7.5, b: 10 }, env2 = { c: 10, d: 7.5 }', () => {
      assert.deepEqual(task2({ a: 7.5, b: 10, }, { c: 10, d: 7.5, }), 0);
    });

  });

  describe('Tests with invalid or missing argument(s)', function () {

    it('Should throw \'Missing or invalid argument(s)\' error because of 1 missing envelope: Env1 = { a: 10, b: 15 }', () => {
      assert.deepEqual(task2({ a: 10, b: 15, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because of 2 missing envelopes', () => {
      assert.deepEqual(task2(), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because of missing envelope\'s property ({ a: 10, }, { c: 12, d: 14 })', () => {
      assert.deepEqual(task2({ a: 10, }, { a: 12, d: 14, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because of invalid second envelope\'s side name (a, b and a, d)', () => {
      assert.deepEqual(task2({ a: 10, b: 15, }, { a: 12, d: 14, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because one value has wrong data type ({ a: 10, b: \'12\', })', () => {
      assert.deepEqual(task2({ a: 10, b: '12', }, { c: 13, d: 15, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because one value is 0 ({ a: 0, b: 12, }, {c: 10, d: 8, })', () => {
      assert.deepEqual(task2({ a: 0, b: 12, }, { c: 10, d: 8, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because one value is a negative number ({ a: -5, b: 15, }, {c: 20, d: 10, })', () => {
      assert.deepEqual(task2({ a: -5, b: 15, }, { c: 20, d: 10, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because one value is out of range ({ a: 5, b: 55, }, {c: 20, d: 30, })', () => {
      assert.deepEqual(task2({ a: 5, b: 55, }, { c: 20, d: 30, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because one value is null ({ a: null, b: 15, }, {c: 20, d: 30, })', () => {
      assert.deepEqual(task2({ a: null, b: 15, }, { c: 20, d: 30, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because one value is NaN ({ a: NaN, b: 25, }, {c: 20, d: 30, })', () => {
      assert.deepEqual(task2({ a: NaN, b: 25, }, { c: 20, d: 30, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

    it('Should throw \'Missing or invalid argument(s)\' error because one value is an object ({ a: {f: 15}, b: 25, }, {c: 20, d: 30, })', () => {
      assert.deepEqual(task2({ a: { f: 15 }, b: 25, }, { c: 20, d: 30, }), {
        status: 'failed',
        reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
      });
    });

  });

})


mocha.run();