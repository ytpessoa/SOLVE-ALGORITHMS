function TimeConvert(num){
    let hours2 = Math.trunc(num/60)
    //or
    let hours = (num/60)|0 // truncar é "forçar" o nº a ser inteiro.    
    
    let minutes = num%60
    
    return `${hours2}:${minutes}`
}

console.log(TimeConvert(61))


