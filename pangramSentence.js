const pangramSentence = str => {
    const alph = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < alph.length; i++) {
        if(!str.includes(alph[i])) {
            return false
        }
    } 
    return true
}

console.log(pangramSentence("I like cats, but not mice"))

//Runtime Complexity: O(n) *although the for loop is constant due to the length of the alphabet being constant
//no matter what, the .includes() method would have to search through the string (which is a growing element)
//causing a linear time complexity