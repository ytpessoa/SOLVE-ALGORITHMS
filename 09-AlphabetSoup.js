//string em ordem alfabetica

function AlphabetSoup(str) { 
    // string -> array-> sort() -> string
    return str.split("").sort().join("")
}

