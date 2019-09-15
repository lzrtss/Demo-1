// Validation function
const isValid = function checkArgs(num) {
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

// Checks if input array is palindrome
const isPalindrome = function checkForPalindrome(arr) {
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

// Main function
export const task4 = function getPalindrome(num) {
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
