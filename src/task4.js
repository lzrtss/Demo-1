import { isValidTask4 as isValid } from '../utilities/validations_for_tasks.js';

export function task4(num) {
  const validationStatus = isValid(num);

  if (validationStatus === 'missingArgs') {
    return {
      status: 'failed',
      reason: 'Missing argument. There should be 1 argument (empty string is not allowed!).',
    }

  } else if (validationStatus === 'wrongDataType') {
    return {
      status: 'failed',
      reason: 'Wrong data type of argument. Should be String.',
    }
  } else if (validationStatus === 'invalidValue') {
    return {
      status: 'failed',
      reason: 'Invalid value. Should be an integer with length <= 100 inside quote marks (String) - \'12344356\'.',
    }
  } else if (validationStatus === 'valid') {
    // Find the equal numbers in the array
    const numLength = num.length;
    const palindromesArr = [];

    for (let i = 0; i < numLength; i += 1) {

      for (let j = numLength - 1; j > i; j -= 1) {
        if (num[i] === num[j]) {
          let palindrome = num.slice(i, j + 1);

          // Check if found piece is palindrome
          if (isPalindrome(palindrome)) {
            palindromesArr.push(palindrome);
          }
        }
      }
    }

    // Find and return max palindrome or '0'
    const maxPalindrome = palindromesArr.sort((a, b) => b.length - a.length)[0];

    return maxPalindrome || 0;
  }
}

// Checks if input array is palindrome
function isPalindrome(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
}
