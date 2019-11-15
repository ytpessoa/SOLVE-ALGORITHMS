//Question: return the next largest palindromic number.
          //retorne o próximo maior número palindrômico.

/* Next Palindrome
Have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number. The input can be any positive integer. For example: if num is 24, then your program should return 33 because that is the next largest number that is a palindrome.
Examples
Input: 2
Output: 3
Input: 180
Output: 181
Tags
searching */

/* Functions:

arr.reverse()

 */



function NextPalindrome(num) { 
   
    let isPalindrome = function (num) {
         let stringNum = num.toString()
         let arrayNum = stringNum.split('')       
         let stringReverse = arrayNum.reverse().join('')      
         return stringNum == stringReverse //compara strings
    }
   
     while(true){
          num = num+1
          if( isPalindrome(num)){
              return num
          }
      }  
  
  }
  
  console.log(NextPalindrome(100))