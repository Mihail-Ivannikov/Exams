// Validate person name
//devide big function into two smaller
'use strict';
const isValidate = (name) => {
  if (!name) return false;
  if (typeof name !== 'string') return false;
  if (name.length === 0) return false;
  if (!name.includes(' ')) return false;
  if (symbolChecker(name) === false) return false;
  return true;
};
const symbolChecker = (name) => {
  const LOWER_BORDER = 97;
  const UPPER_BORDER = 122;
  for (const letterOfName of name) {
    if (letterOfName === ' ') continue;
    const checkingSymbol = letterOfName.toLowerCase().charCodeAt(0);
    if (checkingSymbol < LOWER_BORDER || checkingSymbol > UPPER_BORDER) {
      return false;
    }
  }
};

require('../Tests/validate.js')(isValidate);
