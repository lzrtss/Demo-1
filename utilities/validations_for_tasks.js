export { isValidTask1, isValidTask2, isValidTask3, isValidTask4, isValidTask5, isValidTask6, isValidTask7, };

// Validation function for task 1
function isValidTask1(height, width, symbol) {
  const maxHeight = 50;
  const maxWidth = 50;
  const maxSymLength = 1;

  if (!height || !width || !symbol) {
    return 'missingArgs';
  }

  if (
    typeof height !== 'number'
    || typeof width !== 'number'
    || typeof symbol !== 'string'
  ) {
    return 'wrongDataType';
  }

  if (
    height < 0 || height > maxHeight || !Number.isInteger(height)
    || width < 0 || width > maxWidth || !Number.isInteger(width)
    || height % 2 !== 0 || width % 2 !== 0
    || symbol.length > maxSymLength
  ) {
    return 'wrongValue';
  }
}

// Validation function for task 2
function isValidTask2(env1, env2, ) {
  if (
    typeof env1 === 'object' && env1 instanceof Object
    && typeof env2 === 'object' && env2 instanceof Object
    && typeof env1.a === 'number' && typeof env1.b === 'number'
    && typeof env2.c === 'number' && typeof env2.d === 'number'
    && env1.a > 0 && env1.a <= 50
    && env1.b > 0 && env1.b <= 50
    && env2.c > 0 && env2.c <= 50
    && env2.d > 0 && env2.d <= 50
  ) {
    return true;
  }

  return false;
}

// Validation functions for task 3
// Validation function for objects
function isValidObjTask3(obj) {
  const a = obj.vertices[0].toLowerCase();
  const b = obj.vertices[1].toLowerCase();
  const c = obj.vertices[2].toLowerCase();

  return (
    typeof obj === 'object' && obj instanceof Object
    && typeof obj.vertices === 'string'
    && typeof obj[a] === 'number'
    && typeof obj[b] === 'number'
    && typeof obj[c] === 'number'
    // Checking if each side is shorter than 2 other sides sum
    && obj[a] + obj[b] > obj[c]
    && obj[a] + obj[c] > obj[b]
    && obj[b] + obj[c] > obj[a]
  )
}

// Validation function for array
function isValidTask3(trianglesArr) {
  if (Array.isArray(trianglesArr)
    && trianglesArr.length > 1
    && trianglesArr.length <= 5) {
    if (trianglesArr.every(obj => isValidObjTask3(obj))) {
      return true;
    }
  }

  return false;
}

// Validation function for task 4
function isValidTask4(num) {
  const maxLength = 100;

  if (!num && num !== null && num !== 0 && !Number.isNaN(num)) {
    return 'missingArgs';
  }

  if (typeof num !== 'string') {
    return 'wrongDataType';
  }

  if (!Number(num) || num.length > maxLength) {
    return 'invalidValue';
  }

  return 'valid';
}

// Validation function for task 5
function isValidTask5(obj = {}) {
  if (
    typeof obj === 'object' && obj instanceof Object
    && typeof obj.min === 'number' && Number.isInteger(obj.min)
    && typeof obj.max === 'number' && Number.isInteger(obj.max)
    && obj.min >= 0 && obj.max > 0 && obj.min <= obj.max
    && String(obj.min).length <= 6 && String(obj.max).length <= 6
  ) {
    return true;
  }

  return false;
}

// Validation function for task 6
function isValidTask6(sequenceLength, squaredNum) {
  const maxSequenceLength = 100;

  if (!sequenceLength && sequenceLength !== 0
    || !squaredNum && squaredNum !== 0) {
    return 'missingArgs';
  }

  if (typeof sequenceLength !== 'number' || typeof squaredNum !== 'number') {
    return 'wrongDataType';
  }

  if (sequenceLength <= 0 || sequenceLength > maxSequenceLength
    || !Number.isInteger(sequenceLength) || squaredNum <= 0) {
    return 'invalidNum';
  }

  return 'valid';
}

// Validation function for task 7
function isValidTask7(obj) {
  const minValue = 0;
  const maxValue = 1000000;
  const maxLength = 100;

  if (!obj || obj.hasOwnProperty('min') && !obj.hasOwnProperty('max')
    || obj.hasOwnProperty('max') && !obj.hasOwnProperty('min')
    || !obj.hasOwnProperty('max') && !obj.hasOwnProperty('min')
    && !obj.hasOwnProperty('length') || !obj.hasOwnProperty('min')
    && !obj.hasOwnProperty('max') && !obj.hasOwnProperty('length')
    || obj.min === 0 && obj.max === 0 && obj.length === 0) {
    return 'missingArgs';
  }

  if (typeof obj !== 'object' || !(obj.constructor === Object)) {
    return 'wrongDataType';
  }

  if (obj.min < minValue || obj.min > maxValue
    || obj.max < minValue || obj.max > maxValue
    || obj.length < minValue || obj.length > maxLength
    || obj.min > obj.max
    || obj.hasOwnProperty('min') && !Number.isInteger(obj.min)
    || obj.hasOwnProperty('max') && !Number.isInteger(obj.max)
    || obj.hasOwnProperty('length') && !Number.isInteger(obj.length)
    || obj.hasOwnProperty('min') && Number.isNaN(obj.min)
    || obj.hasOwnProperty('max') && Number.isNaN(obj.max)
    || obj.hasOwnProperty('length') && Number.isNaN(obj.length)
    || !obj.hasOwnProperty('min') && !obj.hasOwnProperty('max')
    && obj.length === 0 || obj.min === 0 && obj.max !== 0) {
    return 'wrongValue';
  }

  return 'valid';
}