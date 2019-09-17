export function task5(obj) {
  if (isValid(obj)) {
    const [start, end] = [Number(obj.min), Number(obj.max)];
    const ticketLength = 6;
    let simpleCount = 0;
    let complexCount = 0;

    for (let i = start; i <= end; i++) {
      i = String(i);
      let lengthDiff = ticketLength - i.length;

      let ticket = '0'.repeat(lengthDiff) + i;

      if (isLuckySimple(ticket)) {
        simpleCount += 1;
      }

      if (isLuckyComplex(ticket)) {
        complexCount += 1;
      }
    }

    let winMethod;
    if (simpleCount > complexCount) {
      winMethod = 'Simple Method';
    } else if (simpleCount < complexCount) {
      winMethod = 'Complex Method';
    } else winMethod = 'Draw';

    return {
      winMethod,
      simpleCount,
      complexCount,
    }
  }

  return {
    status: 'failed',
    reason: 'Invalid or missing argument(s): Argument is object with 2 properties (min, max). For values of both properties only integers between 0 and 999999 are allowed. \'Max\' value should be greater or equal to \'min\'.',
  }
}

// Function for checking lucky tickets using Simple method
function isLuckySimple(str) {
  const mid = 3;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < str.length; i++) {
    if (i < mid) {
      leftSum += Number(str[i]);
    } else {
      rightSum += Number(str[i]);
    }
  }

  return leftSum === rightSum;
}

// Function for checking lucky tickets using Complex method
function isLuckyComplex(str) {
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      oddSum += Number(str[i]);
    } else {
      evenSum += Number(str[i]);
    }
  }

  return oddSum === evenSum;
}

// Validation function
function isValid(obj = {}) {
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