// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % 'mod' operator computes remainders,
// so 17 % 10 is 7.

var lastDigit=function(a ,b) { 
  var aString = a.toString();
  var bString = b.toString();
  
  var aLength = aString.length;
  var aLastChar = aString.charAt(aLength -1);
  
  var bLength = bString.length;
  var bLastChar = bString.charAt(bLength -1);
  
  if (aLastChar == bLastChar) {
    return true;
  } else {
    return false;
  }
}