/*
Simple Adding
Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then 
your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number 
from 1 to 1000.

Examples
Input: 12
Output: 78

Input: 140
Output: 9870

Tags: math fundamentalsfree

*/

function SimpleAdding(num) {   
    let count = 0;      
    for(let i=1; i<=num; i++){
      count +=i;    
    }
    return count;   
}

function SimpleAdding2(num) {   
    //serie: 1 + 2 + 3 + ... + n = n*(n + 1) / 2
    return (num*(num+1))/2
}

 
  console.log(SimpleAdding(4))