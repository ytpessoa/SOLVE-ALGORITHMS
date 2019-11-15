/* Two Sum
Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11

If there are no two numbers that sum to the first element in the array, return -1
Examples
Input: [17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]
Output: 6,11 10,7 15,2
Input: [7, 6, 4, 1, 7, -2, 3, 12]
Output: 6,1 4,3
Tags
array searching   dynamic programming   hash table  Google Facebook  Amazon

 */

/* 
Solution 1: simple solution
Time Complexity : O(n^2)
Auxiliary Space : O(1)
*/
function TwoSum(arr) { 
    let sum = arr[0]
    let result=''
    // Consider all possible pairs and check their sums 
    for(let i=1; i<arr.length-1; i++){
      for(let j=i+1; j<arr.length; j++){
          if(   arr[i]+arr[j]  === sum   ){
            result = result + `${arr[i]},${arr[j]} `
          }
      }
    }
    return (result ==='') ? -1: result
  }
    
  console.log(TwoSum(  [7, 6, 4, 1, 7, -2, 3, 12] ));


/*  
 Solution 2: usando ordenação. 
 Tempo O(n log n) e espaco auxiliar usado é O(1) */

function TwoSum(arr) { 
    let sum = arr.shift() //pega 1º elemento  
    //1) Sorting: O(n log n)  
      arr.sort((a,b)=>a-b)     
    //2)
    let i = 0
    let j = arr.length - 1  
    let result = ""
    
    while(i < j){    
        if( (arr[i] + arr[j]) > sum){
          j--
        }
        else if( (arr[i]+arr[j]) < sum ){
          i++
        }
        else{ 
          result  = result + `${arr[i]},${arr[j]} `
          i++
        }
    }
    return (result ==='') ? -1: result
  }
  
  
  console.log(TwoSum(   [21, 10, 12, 4, 6, 3, 3, 7, 8, 9]   ));


/*   Solution 2: usando Hashing: 
Tempo O(n)
Espaço Auxiliar: O(n)

  https://www.techiedelight.com/find-pair-with-given-sum-array/ */