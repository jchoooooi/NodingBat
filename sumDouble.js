// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.

var sumDouble = function(a, b) { 
  if (a == b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
  
}