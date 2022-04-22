function printPermutations(array, k) {
    var combinations = [];
    var indices = [];
    function next(index) {
        if (index === k) {
            var result = [];
            for (var i = 0; i < k; i++) {
                result[i] = array[indices[i]];
            }
            combinations.push(result);
            return;
        }
        for (var i = 0; i < array.length; i++) {
            if (alreadyInCombination(i, index))
                continue;
            indices[index] = i;
            next(index + 1);
        }
    }
    function alreadyInCombination(i, index) {
        for (var j = 0; j < index; j++) {
            if (indices[j] === i) {
                return true;
            }
        }
        return false;
    }
    next(0);
    return combinations;
}

console.log(printPermutations([1, 2, 3, 4, 5], 3));