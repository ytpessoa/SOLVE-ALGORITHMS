/* se existe um par de números pares adjacentes em qualquer lugar da string. /*
E.g.
"f178svg3k19k46"
 4 6 --> true

 "7r5gg812"
 8 12--> true

 "jfb735f9ph8152"
 "5678dddd" 
 "3gy41d216"
 "7r5gg812" 
*/

/* 
  functions:
  
  regexObj.test(str): true or false
 
 */

function EvenPairs(str) {

    //  '*' -> Corresponde a expressão que o precede repetida 0 ou mais vezes.
    //pattern of the regular expression = [ímpar*][par][ímpar*][par]  
    const regexp = /[13579]*[02468][13579]*[02468]/gi
  
    return regexp.test(str)
  
  }
  
  
  
  
  
  
  console.log(EvenPairs( "f09r27i8e67" ))