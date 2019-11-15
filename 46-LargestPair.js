/* Largest Pair
Have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits.
Examples

Input: 453857
Output: 85

Input: 363223311
Output: 63

Tags: math fundamentals searching 

*/

function LargestPair(num) { 

    let stringNum = num.toString()
    
    let max = stringNum[0]+stringNum[1]
    for(let i=1; i< stringNum.length-1; i++)
    { 
        let leftPair = stringNum[i-1]+stringNum[i]
        let rightPair = stringNum[i]+stringNum[i+1]
        let maior = (leftPair>rightPair)?leftPair:rightPair
        if(maior > max){
            max = maior
        }
  
    }
    return max
  }
     
  
  
  console.log(LargestPair(453857))