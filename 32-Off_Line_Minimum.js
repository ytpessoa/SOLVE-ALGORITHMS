/*
Question:

Off Line Minimum
Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.
Examples
Input: ["1","2","E","E","3"]
Output: 1,2
Input: ["4","E","1","E","2","E","3","E"]
Output: 4,1,2,3
Tags
array  searching

*/

/*
Functions:
array1.shift(): O método shift()remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 
 

*/

/*
Ideia: Esse desafio exige que você encontre repetidamente o valor mais baixo 
       em um subconjunto de um array sempre que a letra E for encontrada. 
    
  -format: ["I","I","E","I",...,"E",...,"I"]
  -Subconjunto: 0 até encontrar um E  
  E.g.:
  ["5","4","6","E","1","7","E","E","3","2"] 
  ["5","6","1","7","E","E","3","2"] 
  ["5","6","7","E","3","2"] 
  ["6","7","3","2"] 
  
  retorno: 4, 1, 5
  
    
  E.g: 
  ["1","2","E","E","3"]
  ["2","E","3"]
  ["3"]
  
  
  Retorno:"1", "2"
  
  E.g.:
  ["4","E","1","E","2","E","3","E"]
  ["1","E","2","E","3","E"]
  ["2","E","3","E"]
  [,"3","E"]
  []
  
 retorno "4", "1","2","3"


*/

function OffLineMinimum(strArr) { 

    //andando com dois arrays auxiliares, só preciso passar uma vez pelo array de entrada
    let numbers = [] //primeiro array Auxiliar
    let output=[]    //segundo array Auxiliar
    let sorting = (a,b) => a-b //crescente

    for(let i=0; i< strArr.length; i++){

        if(strArr[i] != 'E'){
            numbers.push(parseInt(strArr[i]))
            
        }
        else{            
            numbers.sort(sorting)
            output.push(numbers.shift())
        }

    }
    
    return output.join(',')
  
}
     

console.log( OffLineMinimum(  ["4","E","1","E","2","E","3","E"] ))