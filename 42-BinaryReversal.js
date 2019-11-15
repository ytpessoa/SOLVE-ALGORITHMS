/* Binary Reversal
Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, take its binary representation (padded to the nearest N * 8 bits), reverse that string of bits, and then finally return the new reversed string in decimal form. For example: if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111. Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244.
Examples

Input: "213"
Output: 171

Input: "4567"
Output: 60296

Tagsstring manipulation */


function BinaryReversal(str) { 

    let arrayBinary = parseInt(str, 10).toString(2).split('')
        
    // Adicionar zeros à esquerda para tornar o número um número integral de bytes: N * 8 bits
    let size
    if(arrayBinary.length % 8 !== 0){
        do{
            size = arrayBinary.unshift('0')
        }while(size % 8 !== 0);
    }
       
    let binaryReverse = arrayBinary.reverse().join('')   
        
    return parseInt(binaryReverse, 2) //retorna na base 10
}

console.log( BinaryReversal( "4567"   )  )
     