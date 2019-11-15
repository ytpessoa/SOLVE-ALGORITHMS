/*
Division Stringified
Have the function DivisionStringified(num1,num2) take both parameters being passed, 
divide num1 by num2, and return the result as a string with properly formatted commas. 
If an answer is only 3 digits long, return the number with no commas 
(ie. 2 / 3 should output "1"). 
For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".

Examples

Input: 5 & num2 = 2
Output: 3

Input: 6874 & num2 = 67
Output: 103

Tags: math fundamentals

*/

/*
Functions:
 Math.round(x): retorna o valor de x arredondado para o inteiro mais proximo.
 
 string.split(separador): 
 --O separador é tratado como uma string ou uma expressão regular.
 --Se o separador for uma string vazia, str será convertido em um array de caracteres.
 --Se o separador é omitido ou não ocorre na string, o array retornado irá conter um
  elemento consistindo da string inteira

*/

function DivisionStringified(  num1   ,  num2) { 
                             //1400500  ,   52 

let div2 = num1/num2 /* 26932.69230769231 */
let div = Math.round(num1/num2) /*26933*/    
let arrayDiv = div.toString().split('')  // ["2","6","9","3","3"]


//inserir virgula
let insert = 0
if(arrayDiv.length > 3){
    for(let i= arrayDiv.length-1; i>=0; i--){
        insert++
        if(insert == 3){
            arrayDiv[i] = ','+ arrayDiv[i]
            insert=0
        }

    }
}

//["2","6",",9","3","3"]

return arrayDiv.join('') //'26,933'

}

console.log(DivisionStringified( 1400500  ,   52  ))