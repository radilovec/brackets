module.exports = function check(str, bracketsConfig) {
  const openingBrackets = [];
  const closingBrackets = [];
  const matchingBrackets = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    const [openingBracket, closingBracket] = bracketsConfig[i];
    openingBrackets.push(openingBracket);
    closingBrackets.push(closingBracket);
    matchingBrackets[closingBracket] = openingBracket;
  }

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];

    if (openingBrackets.includes(bracket)) {
      if (
        bracket === matchingBrackets[bracket] &&
        stack[stack.length - 1] === bracket
      ) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else if (closingBrackets.includes(bracket)) {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[bracket]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
