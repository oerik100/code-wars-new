// Problems\
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// Solution
String.prototype.digit = function() {
  return /^\d$/g.test(this);
};