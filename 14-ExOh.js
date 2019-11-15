// quantidade de X's e O's

//Solution 1:
function ExOh(str) { 

    str = str.toLowerCase()
    let numbersX=0;
    let numbersO=0;
    for(let i=0; i<str.length; i++){                
        if(str[i]==='x')
        {
            numbersX++
        }
        else{
            numbersO++;
        }    
    }
    return (numbersO===numbersX)
}


//Solution 2:
function WordCount2(str) { 

    var x = str.split("x").join("");  
    var o = str.split("o").join("");    
    return x.length === o.length;
           
}
     
  

  
console.log(  ExOh("xooexo")    )
    
  
  