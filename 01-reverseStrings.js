/*
First Reverse
Have the function FirstReverse(str) take the str parameter being passed and return the string 
in reversed order. For example: if the input string is "Hello World and Coders" then your program
 should return the string sredoC dna dlroW olleH.

Examples
Input: "coderbyte"
Output: etybredoc
Input: "I Love Code"
Output: edoC evoL I

Tags: string manipulation, free
*/

/* Functions:
     split(): string -> array
     reverse(): reverse array
     join(): array -> string
    */

//solution 1:
function FirstReverse(stringIn) { 

    // solucao 1:
    let newString = ""
    
     for(let i=stringIn.length-1; i>=0; i--){
         newString = newString + stringIn.charAt(i)
     }
     return newString
}

//solution 2:
function FirstReverse2(stringIn){
     
    return stringIn.split('').reverse().join('')
    
}
   
           
     
      
   // keep this function call here 
   console.log(FirstReverse(readline()));