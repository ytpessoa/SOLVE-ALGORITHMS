/*
Dash Insert
Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Examples

Input: 99946
Output: 9-9-946

Input: 56730
Output: 567-30

Tags: string manipulation  searching

*/
/*
dash = traço
*/


function DashInsert(str) { 

    let arrString = str.split('')    

    let isOdd = function(a){
        if (a%2 == 1){
            return true
        }
        else{
            return false
        }
    }

    
    for(let i=0; i < arrString.length-1; i++ ){        
        if( isOdd(arrString[i]) && isOdd(arrString[i+1]) ){
            arrString.splice(i+1, 0, '-')
        }
    }
   //ou
  /*
   for (let i = 0; i < str.length-1; i++) {
    if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
      arr[i] = arr[i] + '-';
    }
  }
  */

    return arrString.join('')

}