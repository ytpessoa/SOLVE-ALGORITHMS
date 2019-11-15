/*
Letter Count I
Have the function LetterCountI(str) take the str parameter being passed and return the 
first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" 
should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
If there are no words with repeating letters return -1. Words will be separated by spaces.

Examples
Input: "Hello apple pie"
Output: Hello

Input: "No words"
Output: -1

Tags: string manipulation , searching, hash table

*/

/*
Solution:  We'll use an object-type data structure that will help us keep track of the word, its characters, and the counts.
*/
function LetterCountI(str) { 

    let wordsArray = str.split(" ")
    let table={} //hash table
    /*
    table
    {
     undefined
    }
    */

    //loop through each word in wordsArray
    for(i=0; i<wordsArray.length; i++){

            // e.g. { hello:{h:1, e:1, l:2, o:1}, ...}
            // key(word), chave(object de letters)
            let thisWord = wordsArray[i]        
            table[thisWord] = {}
            /*
            table
            {
                thisWord: {undefined}
            }
            */
            table[thisWord]["maiorContagemLetras"] = 0;
            /*
            table
            {        
                thisWord: {
                maiorContagemLetras:0,
                undefined
                }
            }
            */   
            
            //loop through each character in thisWord
            for(let c = 0; c<thisWord.length; c++ ){
                let thisChar = thisWord[c]
                if(table[thisWord][thisChar] === undefined){
                    table[thisWord][thisChar] = 1
                }
                else{
                    table[thisWord][thisChar] +=1
                }

                // update 'maiorContagemLetras' 
                if(table[thisWord][thisChar] > table[thisWord]["maiorContagemLetras"]){
                    table[thisWord]["maiorContagemLetras"] = table[thisWord][thisChar]
                }

                
            } //fim for interno(cada caractere da palavra)

    } // fim for externo (cada palavra)

    //LetterCountI("Hello apple pie")
        /* hash table:
        { 
        Hello: { maiorContagemLetras: 2, H: 1, e: 1, l: 2, o: 1 },
        apple: { maiorContagemLetras: 2, a: 1, p: 2, l: 1, e: 1 },
        pie: { maiorContagemLetras: 1, p: 1, i: 1, e: 1 }
        undefined 
        }
        */

    //objeto para comparar com outros
    let answer = {
                    word:null,
                    count:1
                 }

    for(let i in table){ // i --> keys: Hello, apple, pie, undefined
        if( table[i]["maiorContagemLetras"] > answer["count"] ){
            answer["count"] = table[i]["maiorContagemLetras"]
            answer["word"] = i
        }
    }

    return (answer["count"]===1) ? -1 : answer["word"]
  
  } //fim funcao


  console.log(LetterCountI("Hello apple pie"))  
 /* hash table:
  { 
  Hello: { maiorContagemLetras: 2, H: 1, e: 1, l: 2, o: 1 },
  apple: { maiorContagemLetras: 2, a: 1, p: 2, l: 1, e: 1 },
  pie: { maiorContagemLetras: 1, p: 1, i: 1, e: 1 } 
 }
*/

  