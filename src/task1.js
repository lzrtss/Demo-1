import { isValidTask1 as isValid } from '../utilities/validations_for_tasks.js';

export function task1(height, width, symbol) {
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
