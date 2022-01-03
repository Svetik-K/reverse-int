module.exports = function reverse (n) {
   let reversedStr = Math.abs(n).toString().split('').reverse().join('');
   return Number(reversedStr);
}
