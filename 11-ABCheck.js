/*
AB Check
Have the function ABCheck(str) take the str parameter being passed and return the 
string true if the characters a and b are separated by exactly 3 places anywhere in the
 string at least once (ie. "lane borrowed" would result in true because there is exactly 
 three characters between a and b). Otherwise return the string false.

Examples

Input: "after badly"
Output: false

Input: "Laura sobs"
Output: true

Tags:string manipulation
*/

function ABCheck(str) { 
   
    str = str.toLowerCase() //string to lowercase letters
      
    for(let i=0; i<str.length; i++){     
      if(str[i] === 'a' && str[i+4]=='b') {return true}
      if(str[i] === 'b' && str[i+4]=='a') {return true}    
    }
    return false
 }