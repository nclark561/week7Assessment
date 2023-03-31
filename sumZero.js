const sumZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(sumZero([1, 1, 2, 3, -4, 4]))

//Runtime complexity: O(n^2)