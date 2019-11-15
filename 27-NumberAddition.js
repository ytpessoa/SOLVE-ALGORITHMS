/*
Number Addition
Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together,
 then return that final number. For example: if str is "88Hello 3World!" the output should be 91. 
 You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. 
 So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

Examples:

Input: "75Number9"
Output: 84

Input: "10 2One Number*1*"
Output: 13

Input: "no numbers sorry**"
Output: 0

Tags: searching regular expression
*/

/*
Functions:

    str.match(regexp): retorna um array de correspondencias(matches)
                       e.g. "75Number9" returns [75, 9] 

*/

function NumberAddition(str) { 

    // Ideia: Localizando todos os números e armazenando-os em array. Depois somando-os.
    const regexp = /[0-9]+/gi // + : pega juntos um ou mais vezes o que precede o +
    // e.g. /a+/ pega ['aa', 'a'] de "caanday 

    let matchesArray = str.match(regexp) || [0] 
    // se str.match(regexp) não achar nada, não retornou um array(true)
    // atribua um array com o elemento 0 -> [0] é true

    return matchesArray.reduce( (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue) )

 }

 console.log(NumberAddition( "no numbers sorry**"))