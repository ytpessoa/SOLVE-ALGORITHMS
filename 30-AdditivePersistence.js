/*
Additive Persistence
Have the function AdditivePersistence(num) take the num parameter being passed which will always be a
 positive integer and return its additive persistence which is the number of times you must add the 
 digits in num until you reach a single digit. For example: if num is 2718 then your program should 
 return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

 Examples

 Input: 4
Output: 0

Input: 19
Output: 2

Tags: math fundamentals  recursion

*/

/*
Ideia: Esse desafio exige que você adicione continuamente todos os números no parâmetro até atingir um único número. Por exemplo, se a entrada for 2718, você soma 2 + 7 + 1 + 8 = 18. Você faz o mesmo com 18, 1 + 8 = 9. Quando você alcança um único número, seu programa deve retornar quantas vezes você tinha que adicionar para alcançá-lo. Para 2718, seu programa deve retornar 2 . Resolveremos esse problema somando recursivamente os números na entrada.
*/

function AdditivePersistence(num) { 

    let arrayDigitos = num.toString().split('')
    
    if(arrayDigitos.length == 1){
        return 0
    }
    else{
        let count=0
        for(let i=0; i<arrayDigitos.length; i++){
            count = count + parseInt(arrayDigitos[i])
        }
        return 1 + AdditivePersistence(count)
    }

}

console.log( AdditivePersistence(19))