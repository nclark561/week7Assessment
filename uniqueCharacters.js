const uniqueCharacters = str => {
    let isUnique = true;
    for (let i = 0; i < str.length; i ++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j] && i !== j) {
                isUnique = false;
            }
        }
    }
    return isUnique;
}

console.log(uniqueCharacters('Mondaym'));

//Runtime Complexity: O(n^2)