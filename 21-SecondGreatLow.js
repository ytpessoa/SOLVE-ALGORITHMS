/* Second GreatLow
Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the
 second lowest and second greatest numbers, respectively, separated by a space. 
 For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
 The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

Examples:
Input: [1, 42, 42, 180]
Output: 42 42

Input: [4, 90]
Output: 90 4

Tags array searching sorting
*/

/*
  functions:
  
  .filter(): preenche novo array baseado na callback
  Ex.:
  newArray = arrayIn.filter(callback: true or false)
  function callback(elemAtual, indexElemAtual, arrayIn){
              ...
              return true or false
  }

  .indexOf():acha a primeira ocorrência(ou índice) 
             do elemento procurado. Retorna -1 senão achar
   Ex.: 
  array.indexOf(elementoProcurado, *pontoIncial)
  
  *pontoIncial é facultativo(caso omitido, começa do 0)


*/

function SecondGreatLow(arrayIn) { 

    //1 - eliminar as repeticoes no array:
    /* [7,7,12]
      indice:valor
      0:7
      1:7
      2:12
      [7,7,12].filter(callback) --> [7,12]
    */
    /**/
    let uniqueArr = arrayIn.filter(function (elemAtual, indexElemAtual, arrayIn){
             return arrayIn.indexOf(elemAtual) === indexElemAtual
    });


    let uniqueArrSorted = uniqueArr.sort( (a,b) => a-b ) //crescente

    if(uniqueArrSorted.length < 2){ //arrayIn com 2 elementos repetidos
      return `${uniqueArrSorted[0]} ${uniqueArrSorted[0]}`
      //or
      // return uniqueArrSorted[0] + " " + ${uniqueArrSorted[0]
    }
    else{ //arrayIn com 2 ou mais elmentos
      return `${uniqueArrSorted[1]} ${uniqueArrSorted[uniqueArrSorted.length-2]}`
    }


}


console.log( SecondGreatLow([2,3] ))