export function task6(sequenceLength, squaredNum) {
  let validationStatus = isValid(sequenceLength, squaredNum);

  if (validationStatus === 'missingArgs') {
    return {
      status: 'failed',
      reason: 'Missing or invalid argument(s): Should be 2 arguments (positive integers).',
    }
  } else if (validationStatus === 'wrongDataType') {
    return {
      status: 'failed',
      reason: 'Wrong data type of argument(s): Both arguments should have Number data type.',
    }
  } else if (validationStatus === 'invalidNum') {
    return {
      status: 'failed',
      reason: 'Wrong value of argument(s): 1st argument should have value between 1 and 100, 2d argument - between 1 and 1000000.',
    }
  } else if (validationStatus === 'valid') {
    const start = Math.ceil(Math.sqrt(squaredNum));
    const numSequence = [];

    for (let i = start; i < start + sequenceLength; i++) {
      numSequence.push(i);
    }

    return numSequence.join(', ');
  }
}

// Validation function
function isValid(sequenceLength, squaredNum) {
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
