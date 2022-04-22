const chooseOptimalDistance = (t, k, ls) => {
    // твій код

    /*for (let i = 0; i < ls.length; i++) {
        let distanceItem = ls[i];
        let distance = 0;
        if (distance<=t) {
            distance = distance + distanceItem;
        }
        for (let j = 0; j <= k; j++) {
            
        }
    }*/


    let distance = 0;

    for (let i = 0; i < ls.length; i++) {
        if (distance < t) {
            distance = distance + ls[i];
            console.log('i=' + i+' and distance='+ distance);

            for (let j = 1; j < ls.length; j++) {
                if (distance < t) {
                    distance = distance + ls[j];
                    console.log('j=' + j+' and distance='+ distance);

                    for (let l = 2; l < ls.length; l++) {
                        if (distance < t) {
                            distance = distance + ls[l];
                            console.log('l=' + l+' and distance='+ distance);
                        }
                    }
                }
            }

        }
    }
    return distance;

}
console.log('sdf');

/*chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]); // null*/

console.log('sdf');
/*console.log(distance);*/
console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]));
