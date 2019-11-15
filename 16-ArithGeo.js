function ArithGeo(arr) { 

  let r = arr[1]-arr[0]
  let q = arr[1]/arr[0]  
  let ehArithmetic = true
  let ehGeometric = true
  
  for(let i=1; i<arr.length-1; i++){
    
    if( (arr[i+1]-arr[i]) !== r ){
        ehArithmetic = false
    }
    if((arr[i+1]/arr[i]) !== q){
      ehGeometric = false
    }
  }

  if(ehArithmetic || ehGeometric ){
    return (ehArithmetic) ? "Arithmetic" : "Geometric" 
  }
  else{
    return -1
  }

}