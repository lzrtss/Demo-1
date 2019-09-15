mocha.setup('bdd');
const assert = chai.assert;

describe('Task 3: Triangles Sorting (Sorts array of triangle objects by it area from bigger to smaller)', () => {

  describe('Tests with valid arguments', () => {

    it('Successfully sorts an array of 2 triangles by name', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: 10, b: 11, c: 12.36 },
        { vertices: 'CDE', c: 13, d: 14, e: 15.36 },
      ]), ['CDE', 'ABC']);
    });

    it('Successfully sorts an array of 3 triangles by name', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: 15, b: 16, c: 18.36 },
        { vertices: 'CDE', c: 13, d: 14, e: 15.36 },
        { vertices: 'FGH', f: 11, g: 12, h: 13.36 },
      ]), ['ABC', 'CDE', 'FGH']);
    });

    it('Successfully sorts an array of 4 triangles by name', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: 10, b: 11, c: 12.36 },
        { vertices: 'CDE', c: 8, d: 8, e: 7 },
        { vertices: 'FGH', f: 11, g: 12, h: 13.36 },
        { vertices: 'IJK', i: 9, j: 10, k: 10.36 },
      ]), ['FGH', 'ABC', 'IJK', 'CDE']);
    });

    it('Successfully sorts an array of 5 triangles by name', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: 10, b: 11, c: 12.36 },
        { vertices: 'CDE', c: 8, d: 8, e: 7 },
        { vertices: 'FGH', f: 11, g: 12, h: 13.36 },
        { vertices: 'IJK', i: 19, j: 20, k: 20.6 },
        { vertices: 'LMN', l: 5, m: 5, n: 5.5 },
      ]), ['IJK', 'FGH', 'ABC', 'CDE', 'LMN']);
    });

    it('Successfully sorts an array of 10 triangles by name', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: 10, b: 11, c: 12.36 },
        { vertices: 'CDE', c: 8, d: 8, e: 7 },
        { vertices: 'FGH', f: 11, g: 12, h: 13.36 },
        { vertices: 'IJK', i: 9, j: 10, k: 10.36 },
        { vertices: 'LMN', l: 5, m: 5, n: 5.5 },
        { vertices: 'OPQ', o: 2, p: 2, q: 3 },
        { vertices: 'RST', r: 15, s: 15, t: 16.36 },
        { vertices: 'UVW', u: 7, v: 7, w: 9.36 },
        { vertices: 'XYZ', x: 11.5, y: 12.9, z: 14.3 },
        { vertices: 'AMZ', a: 9.8, m: 10, z: 12.36 },
      ]), ['RST', 'XYZ', 'FGH', 'ABC', 'AMZ', 'IJK', 'CDE', 'UVW', 'LMN', 'OPQ']);
    });
  });

  describe('Tests with invalid or missing arguments', () => {

    it('Should throw \'Missing or wrong argument(s)\' error because of empty array', () => {
      assert.deepEqual(task3(), {
        status: 'failed',
        reason: 'Missing or wrong argument(s): Argument - an array containing from 2 to 10 objects. Each object should have 4 properties: vertices (value should be a String) and each side, named after its corresponding vertice (values should be Number). Name of each side should be mentioned in \'vertices\' property in uppercase. Also each triangle should be valid: each side should not be greater than sum of two other sides. Example of triangle object: { vertices: \'CDF\', c: 10, d: 11, f: 12.5, }',
      });
    });

    it('Should throw \'Missing or wrong argument(s)\' error because of incorrect side names (not equal to vertices: { vertices: \'CDE\', a: 13, b: 14, c: 15.36 })', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: 10, b: 11, c: 12.36 },
        { vertices: 'CDE', a: 13, b: 14, c: 15.36 },
      ]), {
          status: 'failed',
          reason: 'Missing or wrong argument(s): Argument - an array containing from 2 to 10 objects. Each object should have 4 properties: vertices (value should be a String) and each side, named after its corresponding vertice (values should be Number). Name of each side should be mentioned in \'vertices\' property in uppercase. Also each triangle should be valid: each side should not be greater than sum of two other sides. Example of triangle object: { vertices: \'CDF\', c: 10, d: 11, f: 12.5, }',
        });
    });

    it('Should throw \'Missing or wrong argument(s)\' error because of wrong data type of side value(s) ({ vertices: \'ABC\', a: \'10\', b: 11, c: 12.36 })', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: '10', b: 11, c: 12.36 },
        { vertices: 'CDE', a: 13, b: 14, c: 15.36 },
      ]), {
          status: 'failed',
          reason: 'Missing or wrong argument(s): Argument - an array containing from 2 to 10 objects. Each object should have 4 properties: vertices (value should be a String) and each side, named after its corresponding vertice (values should be Number). Name of each side should be mentioned in \'vertices\' property in uppercase. Also each triangle should be valid: each side should not be greater than sum of two other sides. Example of triangle object: { vertices: \'CDF\', c: 10, d: 11, f: 12.5, }',
        });
    });

    it('Should throw \'Missing or wrong argument(s)\' error because of invalid triangle(s) - each side should not be greater than sum of two other sides ({ vertices: \'ABC\', a: 10, b: 22, c: 10.36 })', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: 10, b: 22, c: 10.36 },
        { vertices: 'CDE', a: 13, b: 14, c: 15.36 },
      ]), {
          status: 'failed',
          reason: 'Missing or wrong argument(s): Argument - an array containing from 2 to 10 objects. Each object should have 4 properties: vertices (value should be a String) and each side, named after its corresponding vertice (values should be Number). Name of each side should be mentioned in \'vertices\' property in uppercase. Also each triangle should be valid: each side should not be greater than sum of two other sides. Example of triangle object: { vertices: \'CDF\', c: 10, d: 11, f: 12.5, }',
        });
    });

    it('Should throw \'Missing or wrong argument(s)\' error because of using single triangle (should be 2-10)', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: 10, b: 11, c: 10.36 },
      ]), {
          status: 'failed',
          reason: 'Missing or wrong argument(s): Argument - an array containing from 2 to 10 objects. Each object should have 4 properties: vertices (value should be a String) and each side, named after its corresponding vertice (values should be Number). Name of each side should be mentioned in \'vertices\' property in uppercase. Also each triangle should be valid: each side should not be greater than sum of two other sides. Example of triangle object: { vertices: \'CDF\', c: 10, d: 11, f: 12.5, }',
        });
    });

    it('Should throw \'Missing or wrong argument(s)\' error because of using more than 10 triangles (should be 2-10)', () => {
      assert.deepEqual(task3([
        { vertices: 'ABC', a: 10, b: 11, c: 12.36 },
        { vertices: 'CDE', c: 8, d: 8, e: 7 },
        { vertices: 'FGH', f: 11, g: 12, h: 13.36 },
        { vertices: 'IJK', i: 9, j: 10, k: 10.36 },
        { vertices: 'LMN', l: 5, m: 5, n: 5.5 },
        { vertices: 'OPQ', o: 2, p: 2, q: 3 },
        { vertices: 'RST', r: 15, s: 15, t: 16.36 },
        { vertices: 'UVW', u: 7, v: 7, w: 9.36 },
        { vertices: 'XYZ', x: 11.5, y: 12.9, z: 14.3 },
        { vertices: 'AMZ', a: 9.8, m: 10, z: 12.36 },
        { vertices: 'JBL', a: 9.1, m: 11, z: 12.5 },
      ]), {
          status: 'failed',
          reason: 'Missing or wrong argument(s): Argument - an array containing from 2 to 10 objects. Each object should have 4 properties: vertices (value should be a String) and each side, named after its corresponding vertice (values should be Number). Name of each side should be mentioned in \'vertices\' property in uppercase. Also each triangle should be valid: each side should not be greater than sum of two other sides. Example of triangle object: { vertices: \'CDF\', c: 10, d: 11, f: 12.5, }',
        });
    });

  });

})


mocha.run();