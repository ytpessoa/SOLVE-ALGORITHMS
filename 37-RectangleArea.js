/* Rectangle Area
Have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height.
Examples
Input: ["(1 1)","(1 3)","(3 1)","(3 3)"]
Output: 4
Input: ["(0 0)","(1 0)","(1 1)","(0 1)"]
Output: 1

Tags
array geometry math fundamentals */


/*
1) parseInt(string, baseDaString);

-string: Se o argumento string não for uma string, então o valor é convertido para uma 
string (utilizando a operação abstrata ToString). Os espaços em branco na string são ignorados.

-retorno:Um número inteiro analisado a partir da string fornecida. Se o primeiro caracter
 não puder ser convertido para um número, NaN é retornado.


 2) str.match(regexp)
 -retorno: Um Array contendo os resultados encontrados ou null 


 3) arrayIn.map(callbackParaCadaElemArrayIn)
 - callback(valorAtual, indiceValorAtual, arrayIn) { return newArray }
 

*/

/*
ideia: pegar maximos e minimos no eixo X e Y.
Calcular o delta e multiplicá-los.

*/

function RectangleArea(strArr) { 
    
   //strArr => [ "(1 1)" , "(1 3)" , "(3 1)" , "(3 3)" ] 
    const regexp = /[0-9]/gi  
    let sorting = (a,b) => a-b //crescente

    let arrayCoordenadas = strArr.map( stringAtual => stringAtual.match(regexp))
    // [ [ '1', '1' ], [ '1', '3' ], [ '3', '1' ], [ '3', '3' ] ]
    
    let arrayXs = arrayCoordenadas.map( arrayIn => arrayIn[0]).sort(sorting)
    //[ '1', '1', '3', '3' ]
    let arrayYs = arrayCoordenadas.map( arrayIn => arrayIn[1]).sort(sorting)
    //[ '1', '1', '3', '3' ]
    
    let deltaX = arrayXs[arrayXs.length-1] - arrayXs[0]
    let deltaY = arrayYs[arrayYs.length-1] - arrayYs[0]

    return deltaX*deltaY 
    

}


console.log(RectangleArea(   ["(1 1)","(1 3)","(3 1)","(3 3)"] ))