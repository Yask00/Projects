/**
 * primeDividers outputs all prime dividers except 1
 * @param {n} number - integer number
 */

const primeDividers = (n) => {
  if (n <= 1 || !Number.isInteger(n)) {
    return;
  }
  if (2 <= n && n <= 3) {
    return n;
  }

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  return [...Array(n + 1).keys()].slice(2).filter((val, _) => { // 2-n
    return isPrime(val) && n % val === 0;
  });
};

console.log(primeDividers(15)); // n = 15 => 3, 5
console.log(primeDividers(11)); // n = 11 => 11
console.log(primeDividers(12)); // n = 12 => 2, 3
