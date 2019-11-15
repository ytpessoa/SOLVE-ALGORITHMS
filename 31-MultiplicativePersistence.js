/*
Multiplicative Persistence
Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.
Examples
Input: 4
Output: 0
Input: 25
Output: 2
Tags
math fundamentals


*/

function MultiplicativePersistence(num) { 

   let arrayNumber = num.toString().split('')

   if(arrayNumber.length==1){
       return 0
   }
   else{
       let count=1
       for(let i=0; i<arrayNumber.length; i++){
           count= count*parseInt(arrayNumber[i])
       }
       return 1+MultiplicativePersistence(count)
   }

  
  }

  console.log(MultiplicativePersistence(25))