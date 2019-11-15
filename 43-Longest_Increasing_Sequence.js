/* Longest Increasing Sequence
Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence.
Examples
Input: [9, 9, 4, 2]
Output: 1
Input: [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]
Output: 7
Tags: array   dynamic programming   sorting    Google */


/*
/*
Solution 1:
Dynamic Programming implementation of LIS problem :
https://www.youtube.com/watch?time_continue=393&v=Ns4LCeeOFS4

*/


function LongestIncreasingSequence(arr) { 
  
    if(arr.length === 0){ //verificacao
        return 0
    }
    let arrLIS = new Array(arr.length).fill(1)
    let max=1
    /*Computar valores LIST otimizados de maneira ascendente*/
    for(let i=1; i<arr.length; i++){
      for(let j=0; j<i; j++){
          if(  (arr[i] > arr[j]) ) { //temos uma LIS              
                if( (arrLIS[j]+1) > arrLIS[i] ){
                    arrLIS[i] = arrLIS[j]+1
                    max = arrLIS[i]
                }
                            
          }
      }
    }

    return(max)
 
  }

  /* Complexity Analysis

  Time complexity : O(n^2). Two loops of n are there.  
  Space complexity : O(n). arrLIS array of size n is used.
 */
   
console.log( LongestIncreasingSequence( [  9, 9, 4, 2  ]))



/* Solution 2
LIS Longest Increasing Subsequence Size (N log N)
https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/

Dynamic Programming with Binary Search: https://leetcode.com/problems/longest-increasing-subsequence/solution/
 */