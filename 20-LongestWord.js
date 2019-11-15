/*

Longest Word
Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. If there are two or more 
words that are the same length, return the first word from the string 
with that length. Ignore punctuation and assume sen will not be empty.

Examples

Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love
Tags: string manipulation, searching, free



*/

//Solution 1:

function LongestWord(str) { 

  let arraStr = str.split(" ")  
  let table = {}
  let regexp = /[a-z]|[0-9]/gi // ou  /[a-z0-9]+/gi

  for(let i=0; i<arraStr.length; i++){
     let wordSize = arraStr[i].match(regexp).length 
    table[arraStr[i]] = wordSize
  }

  let answer = {word:null, count:0}  
  for(let key in table){
    if(answer["count"] < table[key]){
        answer["count"] = table[key]
        answer["word"] = key
    }
  }
  return answer["word"]

}


//Solution 2:
 function LongestWord2(str) { 

  let regexp = /[a-z|0-9]+/gi  // e.g. "hello$% ##all" becomes [hello, all]
  let arrayStr = str.match(regexp)  
  let ordenaDescrescente = (a,b) => b.length - a.length
  let arrayStrSorted = arrayStr.sort(ordenaDescrescente)
  return arrayStrSorted[0]
}

        

   
LongestWord("the $$$longest# word is coderbyte");     








