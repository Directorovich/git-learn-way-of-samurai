const chooseOptimalDistance = (t, k, ls) => {
    if (t > 0 && k != null && k > 0 && ls != null && k <= ls.length) {
        let optimalDistance = 0;
        let combinations = getCombinations(k, ls);

        for (let index = 0; index < combinations.length; index++) {
            const combination = combinations[index];
            const distance = sumElements(combination);

            if (optimalDistance < distance && distance <= t) {
                optimalDistance = distance;
            }
        }
        return optimalDistance;
    }
    return null;
};

const getCombinations = (k, ls) => {
    //debugger;
    let combinations = [];

    if (k == 1) {
        let combs = [];
        for (i = 0; i < ls.length; i++) {
            combs.push([ls[i]]);
        }
        return combs;
    }

    for (let i = 0; i < ls.length - k + 1; i++) {
        const head = ls.slice(i, i + 1);

        const tailCombinations = getCombinations(k - 1, ls.slice(i + 1));
        
        for (let j = 0; j < tailCombinations.length; j++) {
            combinations.push(head.concat(tailCombinations[j]));
        }
    }
    return combinations;
}

const sumElements = (combination) => {
    return combination.reduce((sum, element) => sum + element, 0);
}

chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]);
chooseOptimalDistance(174, 0, [51, 56, 58, 59, 61]);
/*console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); // 173
console.log(chooseOptimalDistance(174, 0, [51, 56, 58, 59, 61])); // null
console.log(chooseOptimalDistance(999, 3, [51, 56, 58, 59, 61])); // 178
console.log(chooseOptimalDistance(999, 1, [51, 56, 58, 59, 61])); // 61
console.log(chooseOptimalDistance(999, 2, [51, 56])); // 107
console.log(chooseOptimalDistance(163, 3, [50])); //null*/




