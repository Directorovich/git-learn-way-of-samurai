const chooseOptimalDistance = (t, k, ls) => {
    // твій код
    let arrayBig = [];
    let arraySmall = [];
    for (let i = 0; i < ls.length - k + 1; i++) {
        /*arraySmall.push(ls[i])*/
        console.log(ls[i])
        console.log('first')
        let a = arraySmall
        for (let j = i + 1; j < ls.length - k + 2; j++) {
            /*arraySmall.push(ls[j])*/
            console.log(ls[j])
            console.log('second')
            let b = a.push(ls[j])

            for (let l = j + 1; l < ls.length - k + 3; l++) {
                let c = b.push(ls[l])
                console.log(ls[l])
                console.log('third')

            }
        }
    }
    /*let arrayBig = [];
    let arraySmall = [];

    /!*for (let i = 0; i < ls.length; i++) {
        if (arraySmall.length===k) {
            arrayBig=arrayBig.push(arraySmall);
            arraySmall=[];
        }else {
            arraySmall.push(ls[i]);
        }

    }*!/

    for (let i = 0; i < ls.length; ++i) {
        console.log('start 1st')
        arrayBig.push(arraySmall);
        console.log('запушили Big '+arraySmall)
        for (let j = i+1; j < ls.length; ++j) {
            console.log('start 2nd')
            arraySmall.push(ls[j])
            console.log(arraySmall)

            /!*let a = arraySmall;

            console.log('временному массиву присвоили 1-й ел'+arraySmall)
            a.push(ls[j]);
            console.log('запушили J в А'+ls[j])

            arrayBig.push(a);
            console.log('запушили в большой массив переменный'+a)
            a=[];
            console.log('удалили переменный масив'+a)
            arraySmall=[];
            console.log('запушили маленький тоже'+arraySmall)*!/
        }


    }*/
    return arraySmall;
}

/*chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]); // null*/
/*console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]))*/
console.log(chooseOptimalDistance(174, 3, [0, 1, 2, 3, 4]))