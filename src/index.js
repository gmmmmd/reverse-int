module.exports = function reverse (n) {
  let number = n;
  if (n < 0) {
    number = number * -1;
  }
  const result = number.toString().split('').reverse().join('');
  return result;
}
