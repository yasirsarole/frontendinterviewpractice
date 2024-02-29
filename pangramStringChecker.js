// Pangram String checker
// pangram is a sentence which contains all the letters from a-z
// The quick brown fox jumps over the lazy dog

const checkPangram = (str) => {
  let arr = new Array(26).fill(false);
  let index;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    } else if (str[i] >= "a" && str[i] <= "z") {
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    } else {
      continue;
    }

    arr[index] = true;
  }

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === false) return false;
  }

  return true;
};

const result = checkPangram("The quick brown fox jumps over the lazy dog");
console.log(result);

// 2nd solution
const checkPangram2 = (str) => {
  let set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      set.add(str[i].toLowerCase());
    }
  }

  return set.size === 26;
};

const result2 = checkPangram2("The quick brown fox jumps over the lazy dog");
console.log(result2);
