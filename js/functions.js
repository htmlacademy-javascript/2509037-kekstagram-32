
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));

function isPalindrome(str) {
  const normalizedStr = str.toLowerCase().replace(/\s/g, '');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}

console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));
