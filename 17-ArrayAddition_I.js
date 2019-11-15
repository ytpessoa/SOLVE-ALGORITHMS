/*
Array Addition I
Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true 
if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number
 in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should 
 return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may 
 contain negative numbers. 

 Examples

 Input: [5,7,16,1,2] 
Output: "false"

Input: [3,5,-1,8,12] 
Output: "true"

Input:  [54,49,1,0,7,4]
Output: 'true"

Tags
array, math fundamentals, searching, dynamic programming
*/

function ArrayAdditionI(arr) { 

    // a>b: return >0
   // a==b: return 0
   //  a<b: return <0
   const compareNumbers = (a,b) => a-b  
   //array.sort() --> sorting assuming the elements are strings
   const largestNumber = arr.sort(compareNumbers).pop()
   
  
   /*Formar parcelas(somando e subtraindo) com os elementos do array*/    
   let count =0;
   for(let i=0; i<arr.length; i++){
            count = arr[i]
            // 1)Formar parcelas somando:
            for(let j=0; j<arr.length; j++){
                if(i!=j){ // i!=j : fixa o que tá em 'i'
                    count = count + arr[j]
                    if(count === largestNumber){return true}
               }
            }
            
            // 2)Formar parcelas subtraindo de 'count' que tá com a soma total:
            for(let k=0; k<arr.length; k++){
                if(i!=k){
                    count = count - arr[k]
                    if(count === largestNumber) {return true}
                }
            }
           
            count = 0  
    }

    return false  

  }


  console.log( ArrayAdditionI(   [54,49,1,0,7,4]  )  )



