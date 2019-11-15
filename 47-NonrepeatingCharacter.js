/* retorna o primeiro caractere não repetitivo. */


/* Nonrepeating Character
Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character.
Examples
Input: "abcdef"
Output: a
Input: "hello world hi hey"
Output: w
Tags: searching  hash table Amazon  Microsoft
 */

function NonrepeatingCharacter(str) { 
    let hashTable = {}
    
    //1) preencher a hashTable
    for(let i=0; i < str.length; i++){    
        if(str[i] !== " "){          
              if( hashTable[str[i]] === undefined){
                hashTable[str[i]] = 1
              }
              else{
                hashTable[str[i]]++
              }
        }
    }
    
    let charResult
    
    for(let key in hashTable){
      if(hashTable[key] === 1){
        charResult = key;
        break;
      }
    }
    
    return charResult
    }
    
    console.log(charResult)
    
    