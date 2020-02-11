function calc(table1, table2, dat1, dat2, total, projData) {
    for (let i = 0; i < dat1.length; i++) {
        dat1[i] = ((dat1[i] * projData) / total)*table1[i]
        dat2[i] = ((dat2[i] * projData) / total)*table2[i]
    }
    
    let res1 = dat1.reduce((t,c) => t += c)
    let res2 = dat2.reduce((t,c) => t += c)
    console.log(`Expected value 1: ${res1}\nExpected value 2: ${res2}`)
}

calc([5,3], [3,1],[10,12], [11, 27], 50, 300)

function arrayMult(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
       arr1[i] *= arr2[i];
    }
    console.log(arr1.reduce((t,c) => t += c))
}

arrayMult([0.3, 0.25, 0.20, 0.20, 0.05], [0, 1000,2500,2500,2500])

function singleExpVal(trials, perc, win, participationCost) {
    console.log((perc**trials) * (win-participationCost) + (1-(perc**trials))*(-participationCost))
} 

singleExpVal(3, 0.3, 50, 2)
singleExpVal(4, 0.8, 70, 2)