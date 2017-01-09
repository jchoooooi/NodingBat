// Given a string, return a new string where the first and last chars
// have been exchanged.

var frontBack = function(str) {
  var strLength = str.length;
  var strLast = str.substring(strLength-1, strLength);
  var strFirst = str.substring(0,1);
  if (strLength > 1) {
    return strLast + str.substring(1, strLength-1) + strFirst;
  } else {
  	return str;
  }
}