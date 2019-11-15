/*
Superincreasing
Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms 
a superincreasing sequence where each element in the array is greater than the sum of all previous elements. 
The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the 
string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false"

Examples
Input: [1,2,3,4]
Output: false
Input: [1,2,5,10]
Output: true
Tags: 
array

*/

/*
E.g. [1,2,3,4]
valor > soma dos anteriores
    1 > 0       ok!
    2 > 1       ok!
    3 > 1+2=3   no!
    4 > 1+2+3=6 no!
    
    return false 
*/


function Superincreasing(arr) { 
    
    let acumulador = 0
    
    for(let i=0; i<arr.length; i++ ){
        
        if( arr[i] <= acumulador){
            return false
        }
        
        acumulador = acumulador + arr[i]
        
        
    }
    return true  
  
  }