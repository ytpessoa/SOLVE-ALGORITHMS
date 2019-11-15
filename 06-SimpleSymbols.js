/*
Simple Symbols
Have the function SimpleSymbols(str) take the str parameter being passed and determine 
if it is an acceptable sequence by either returning the string true or false. The str parameter
 will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) and 
 for the string to be true each letter must be surrounded by a + symbol. So the string to the left would 
 be false. The string will not be empty and will have at least one letter.

 Examples
Input: "+d+=3=+s+"
Output: true

Input: "f++d+"
Output: false

Tags:  string manipulation;  regular expression ; free


*/

/*
functions:
string.match(regexp): return an array the matches or null no match is found

array==true
if(array){ 
}

*/


function SimpleSymbols(str){
    
    /*
    pad the strings so that if a character exists at the
    beginning of the string for example, we don't get on
    out-of-bounds error by trying to get the character before it
    */
    str = '=' + str + '='
    
    let regexp = /[a-z]/gi
       
    
   for(let i=0; i < str.length; i++){       
        if(str[i].match(regexp)){
            if( str[i-1]!=='+' || str[i+1] !== '+' ){
                return false
            }         
        }
    }    
    return true
}