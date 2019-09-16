// Validation function
const isValid = function validateArgs(height, width, symbol, ) {
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

// Main function
export const task1 = function drawChessBoard(height, width, symbol) {
  const validationStatus = isValid(height, width, symbol);

  if (validationStatus === 'missingArgs') {
    return {
      status: 'failed',
      reason: 'Missing or invalid argument(s). There should be 3 arguments. 0 empty string or non-digits are incorrect values.',
    }
  } else if (validationStatus === 'wrongDataType') {
    return {
      status: 'failed',
      reason: 'Wrong data type of argument(s). There should be 3 arguments: Number, Number and String.',
    }
  } else if (validationStatus === 'wrongValue') {
    return {
      status: 'failed',
      reason: 'Wrong value of argument(s). 1st and 2d arguments should be EVEN integers between 2 and 50; 3d argument should contain of 1 symbol inside quotes.',
    }
  }

  let chessBoard = '';

  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width / 2; j += 1) {
      if (i % 2 === 0) {
        chessBoard += `${symbol} `;
      } else {
        chessBoard += ` ${symbol}`;
      }
    }

    chessBoard += '\n';
  }

  return chessBoard;
}
