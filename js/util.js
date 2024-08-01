function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  const normalizedStr = str.toLowerCase().replace(/\s/g, '');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}
export {checkStringLength,isPalindrome};

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

export {getRandomInteger};
