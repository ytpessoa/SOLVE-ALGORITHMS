//solution 1:
function CheckNums(num1,num2){
    if(num2 > num1){
      return true;
    }
    else if(num2 === num1){
      return -1;
    }
    return false
  
  }

//solution 2:
function CheckNums2(num1,num2){
    //ternary expression:
    return (num2>num1) ? true : (num2 ==num1) ? -1 : false
  
}
  