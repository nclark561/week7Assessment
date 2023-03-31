const longestWord = arr => {
    let longestLength = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestLength) {
            longestLength = arr[i].length
        }
    }
    return longestLength
}

console.log(longestWord(["hi", "hello", "supercalafragilisticespyalidocious"]))

//Runtime Complexity: O(n)