
/*
Bitwise One
Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101"
Examples
Input: ["100", "000"]
Output: 100
Input: ["00011", "01010"]
Output: 01011
Tags: array searching  bitwise operation

*/



function BitwiseOne(strArr) { 

  let number1 = parseInt(strArr[0], 2)
  let number2 = parseInt(strArr[1],2)
  
  return (number1 | number2).toString(2)
  
}
   
console.log( BitwiseOne(["100", "000"]) )
