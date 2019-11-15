/*
Wave Sorting
Have the function WaveSorting(arr) take the array of positive integers stored in arr and return the string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. The input array will always contain at least 2 elements. More examples are given below as sample test cases.
Examples
Input: [0, 1, 2, 4, 1, 1, 1]
Output: false
Input: [0, 4, 22, 4, 14, 4, 2]
Output: true
Tags: array sorting Google

*/


function WaveSorting(arr) { 
  
  //1) Sort the input array 
  let sorting = (a,b)=> a-b  
  let arrSorted = arr.sort(sorting) //O(nLogn): merge sort
  

  //2) Swap adjacent elements 
  let troca=0
  for(let i=0; i < arrSorted.length-1; i+=2){
      if(arrSorted[i] < arrSorted[i+1]){
        troca = arrSorted[i+1]
        arrSorted[i+1] = arrSorted[i]
        arrSorted[i] = troca
     }
     else{
       return false
     }
  }
  return true
}



