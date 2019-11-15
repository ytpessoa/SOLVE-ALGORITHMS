
//Soluction 1:
function Palindrome(str) { 

    if(str==='' || str===null){
      return false
    }
  
    str = str.toLowerCase()
    let arrayLetters = new Array('z'.charCodeAt()-'a'.charCodeAt()).fill(0)
    
    for(let i=0; i<str.length; i++){
      arrayLetters[ str[i].charCodeAt() -'a'.charCodeAt() ]++
    }
    let countNumberOne = 0;
    for(let i=0; i<arrayLetters.length; i++ ){
      if(arrayLetters[i]%2 !== 0){
          countNumberOne++
          if(countNumberOne>1){
            return false
          }
      }
    }
    return true
   
  }
  
//Solution 2:
function Palindrome(str) { 

    // first we'll get rid of spaces and make the characters 
    // all lowercase to make it easier to work with
    var str = str.split(" ").join("").toLowerCase();
  
    // we wrote this reverse code in a previous solution
    var rev = str.split('').reverse().join('');
  
    // now it's very easy to check if a string is a palindrome
    return str === rev;
           
  }