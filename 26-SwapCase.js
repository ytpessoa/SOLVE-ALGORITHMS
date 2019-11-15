/*
Swap Case
Have the function SwapCase(str) take the str parameter and swap the case of each character.
 For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

 Examples

Input: "Hello-LOL"
Output: hELLO-lol

Input: "Sup DUDE!!?"
Output: sUP dude!!?

Tags: string manipulation

*/
/*
toLowerCase() e toUpperCase() não modificam a string original
*/

function SwapCase(str) { 

   
   let strArray = str.split('')

   // loop through the array swapping letter cases
  // uppercase -> lowercase
  // lowercase -> uppercase

   for(let i=0; i< strArray.length; i++){
        if(strArray[i] === strArray[i].toUpperCase()){    
            strArray[i] = strArray[i].toLowerCase()
        }
        else if(strArray[i] === strArray[i].toLowerCase()){
            strArray[i] = strArray[i].toUpperCase() 
        }   
    }

    return strArray.join('')

}

console.log(SwapCase("Hello-LOL123!!")  )