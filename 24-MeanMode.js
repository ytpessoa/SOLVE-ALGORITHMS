
/*
Mean Mode
Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other 
(ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, 
and will not contain more than one mode.

Examples

Input: [1, 2, 3]
Output: 0

Input: [4, 4, 4, 6, 2]
Output: 1

Tags: array math fundamentals  hash table

*/

/*
Moda(mode): É chamado de moda o dado mais frequente de um conjunto. 
Média(mean)
*/

function MeanMode(arr) { 

    //1 Calculo da soma
    let sum=0
    for(let i=0; i<arr.length; i++){
        sum = sum+ arr[i]
    }
    /* ou
    let summed = arr.reduce(function(previousVal, currentVal, index, self) {
                return previousVal + currentVal;
    })    
    */
    
    //2 Calculo da media
    media = sum/arr.length

    
    let table={} //{"5": 1, "3": 3, "1": 1}
    
    for(let i=0; i<arr.length; i++){
        let key = arr[i]
        if(table[key] === undefined){
            table[key] = 1
        }
        else{
            table[key] +=1
        }        
    }

    let answer = {count:0, number:null}
    
    
    for(let keyTable in table ){
        if(table[keyTable] > answer["count"]){
            answer["count"] = table[keyTable]
            answer["number"] = keyTable
        }       
    }
    
   return (answer["number"]==media) ? 1 : 0    
    
  }

  console.log(MeanMode(  [4, 4, 4, 6, 2])  )