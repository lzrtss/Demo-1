export function task7(obj) {
  const validationStatus = isValid(obj);

  if (validationStatus === 'missingArgs') {
    return {
      status: 'failed',
      reason: 'Argument(s) error: Should be an object with EITHER 2 properties \'min\' or \'max\' OR 1 property \'length\'.',
    }
  } else if (validationStatus === 'wrongDataType') {
    return {
      status: 'failed',
      reason: 'Wrong data type of argument(s): Argument should be an Object, all properties should be integers.',
    }
  } else if (validationStatus === 'wrongValue') {
    return {
      status: 'failed',
      reason: 'Wrong value of argument(s): properties \'min\' and \'max\' should be integers between 0 (exclusive) and 1 000 000 (inclusive); \'max\' should be greater than or equal to \'min\'; \'length\' should have value between 0 (exclusive) and 100 (inclusive).',
    }
  } else if (validationStatus === 'valid') {
    if (obj.min && obj.max) {
      return getFiboRange(obj.min, obj.max);
    }

    return getFiboLength(obj.length);
  }
}

// Gets Fibonacci numbers sequence in range from min to max
function getFiboRange(min, max) {
  const result = [];
  const fibArr = [1, 1];
  let currentFib = 0;

  for (let i = 0; currentFib < max; i++) {

    if (i < 2) {
      currentFib = fibArr[i];
    } else {
      fibArr[i] = fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1];
      currentFib = fibArr[fibArr.length - 1];
    }

    if (currentFib >= min && currentFib <= max) {
      result.push(currentFib);
    }
  }

  if (!result.length) {
    return 'There is no Fibonacci numbers in mentioned range';
  }

  return result;
}

// Gets Fibonacci numbers sequence of mentioned length
function getFiboLength(length) {
  const fibArr = [1, 1];
  if (length == 1) {
    return [1];
  } else if (length == 2) {
    return fibArr;
  }

  for (let i = 2; i < length; i++) {
    fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
  }

  return fibArr;
}

// Validation function
function isValid(obj) {
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
