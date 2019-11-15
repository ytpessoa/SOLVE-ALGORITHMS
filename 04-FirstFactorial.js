//Soluction 1: iterative
function FirstFactorial(num){

    let count = 1;
    for(let i=num; i>=1; i--){
        count = count*i
    }
    return count
}

//Soluction 2: recursive
/*
recursive terms:
0! = 1
1! = 1   --> fat(1-1) * 1
2! = 1! * 2 --> fat(2-1) * 2
3! = 2! * 3 --> fat(3-1) * 3
4! = 3! * 4 --> fat(3-1) * 4
5! = 4! * 5 --> fat(5-1) * 5
*/
function FirstFactorial2(num){ //more slowly
    if(num === 0){
        return 1
    }
    return FirstFactorial2(num-1)*num //of recursive terms

    /*
    This solution may run slowly if you try to calculate the factorial of a very large number. 
    One solution to this is memoization. Memoization is a technique used in programming where you store 
    values that take a long time to calculate in a list, which you can then retrieve values from easily
     later on. You can read more about recursion and memoization here.
    */
}

console.log( FirstFactorial2(4) );

