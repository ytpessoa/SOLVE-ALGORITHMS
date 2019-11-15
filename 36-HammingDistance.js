/*
Hamming Distance
Have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only contain 
two strings of equal length and return the Hamming distance between them. The Hamming distance is the number 
of positions where the corresponding characters are different. For example: if strArr is ["coder", "codec"] 
then your program should return 1. The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers.
Examples
Input: ["10011", "10100"]
Output: 3
Input: ["helloworld", "worldhello"]
Output: 8

*/



/*
Hamming distance is the number of positions where the corresponding characters are different.

E.g. ["coder", "codec"] retorna 1

*/

function HammingDistance(strArr) { 

    const size=strArr[0].length
    const word1 = strArr[0]
    const word2 = strArr[1]

    let count= 0
    for(let i = 0; i< size; i++){
        if(word1[i] != word2[i]){
            count++
        }
    }
    
    return count
      
}

console.log(HammingDistance( ["helloworld", "worldhello"]))

