// Validation function for objects
const isValidObj = function checkEachObj(obj) {
  const a = obj.vertices[0].toLowerCase();
  const b = obj.vertices[1].toLowerCase();
  const c = obj.vertices[2].toLowerCase();

  return (
    typeof obj === 'object' && obj instanceof Object
    && typeof obj.vertices === 'string'
    && typeof obj[a] === 'number'
    && typeof obj[b] === 'number'
    && typeof obj[c] === 'number'
    // checking if each side is shorter than 2 other sides sum
    && obj[a] + obj[b] > obj[c]
    && obj[a] + obj[c] > obj[b]
    && obj[b] + obj[c] > obj[a]
  )
}

// Validation function for array
const isValid = function checkArguments(trianglesArr) {
  if (Array.isArray(trianglesArr)
    && trianglesArr.length > 1
    && trianglesArr.length <= 10) {
    if (trianglesArr.every(obj => isValidObj(obj))) {
      return true;
    }
  }

  return false;
}

// Function calculating area of each triangle
const getArea = function getAreaOfEachTriangle(trianglesArr) {
  const [name, a, b, c,] = trianglesArr;

  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  return { name, area, };
}

// Main function
const task3 = function sortTriangles(trianglesArr = []) {
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
    reason: 'Missing or wrong argument(s): Argument - an array containing from 2 to 10 objects. Each object should have 4 properties: vertices (value should be a String) and each side, named after its corresponding vertice (values should be Number). Name of each side should be mentioned in \'vertices\' property in uppercase. Also each triangle should be valid: each side should not be greater than sum of two other sides. Example of triangle object: { vertices: \'CDF\', c: 10, d: 11, f: 12.5, }',
  }
}
