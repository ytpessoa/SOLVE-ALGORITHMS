/*
Letter Capitalize
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize
 the first letter of each word. Words will be separated by only one space.

 Examples
Input: "hello world"
Output: Hello World

Input: "i ran there"
Output: I Ran There

Tags: string manipulationfree
*/


//Solution 1:
function LetterCapitalize(str) { 

    let newString=''
    let charWhiteSpace = ' '
    newString = str[0].toUpperCase() 
    for(let i=1; i<str.length; i++){
        newString= newString + str[i]
        if(str[i]==charWhiteSpace){
          newString = newString + str[i+1].toUpperCase()
          i++            
        }
    }

    
    return newString; 
  
  }
 
  //Solution 2:
  function LetterCapitalize2(str) { 

    let re = /\b[a-z]/gi //first char(a-z) of each word
    let capitalize = function(char){
        return char.toUpperCase()
    }

    str = str.replace(re, capitalize)

    return str

  }

  //Solution 3: with array
  function LetterCapitalize3(str) { 
  
    // split the string into an array
    var words = str.split(" ");  // ["word1","word2", ...]
  
    // we split the word into two parts and then combine the parts 
    // the first part is the first letter which we capitalize and the 
    // second part is the rest of the string
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
    }
  
    // return the array of words joined into a string
    return words.join(" ");
           
  }