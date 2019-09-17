import { isValidTask3 as isValid } from '../utilities/validations_for_tasks.js';

export function task3(trianglesArr = []) {
  if (isValid(trianglesArr)) {
    const valuesArr = [];

    trianglesArr.forEach(obj => {
      valuesArr.push(Object.values(obj));
    });

    return valuesArr.map(triangle => getArea(triangle))
      .sort((a, b) => b.area - a.area)
      .map(obj => obj.name);
  }

  return {
    status: 'failed',
    reason: 'Missing or wrong argument(s): Argument - an array containing from 2 to 5 objects. Each object should have 4 properties: vertices (value should be a String) and each side, named after its corresponding vertice (values should be Number). Name of each side should be mentioned in \'vertices\' property in uppercase. Also each triangle should be valid: each side should not be greater than sum of two other sides. Example of triangle object: { vertices: \'CDF\', c: 10, d: 11, f: 12.5, }',
  }
}

// Function calculating area of each triangle
function getArea(trianglesArr) {
  const [name, a, b, c,] = trianglesArr;

  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  return { name, area, };
}
