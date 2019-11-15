/*
Vowel Count
Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge.
Examples
Input: "hello"
Output: 2
Input: "coderbyte"
Output: 3
Tags
string manipulationsearchingregular expression
*/

function VowelCount(str) { 

    let regexp = /[a|e|i|o|u]/gi 
    let count=0
    for(let i=0; i<str.length; i++){
      if(str[i].match(regexp)){
          count++
      }
    }  
    return count; 
  }