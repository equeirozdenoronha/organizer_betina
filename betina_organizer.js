function organizar(array) {
    try {
        if (!array || array.length == 0) {
            throw new Error('Não há meias para organizar!')
        }
        let paresImpares = array.reduce((a, b) => ({
            ...a,
            [b]: (a[b] || 0) + 1
        }), {})

        return paresImpares
    } catch (error) {
        throw error.message
    }
}

const pares = (dict) => {

    let pares = {}
    let qtTotalPares = 0
    let a = Object.keys(dict)
    for (i of a) {
        if (dict[i] % 2 == 0){
            qtTotalPares += 1
            pares[i] = dict[i]/2
        }else if(dict[i] > 1) {
            qtTotalPares += 1
            pares[i] = Math.trunc(dict[i]/2)
        }

    }
    pares['total'] = qtTotalPares

    return pares
}
const impares = (dict) => {
    let impares = {}
    let qtTotalImpares = 0
    let a = Object.keys(dict)
    for (i of a) {
        if (dict[i] == 1) {
            qtTotalImpares += 1
            impares[i] = dict[i]
        }else if(dict[i] % 2 != 0){
            qtTotalImpares += 1
            impares[i] = Math.trunc(dict[i]/2)
        }
    }

    impares['total'] = qtTotalImpares
    return impares
}

// Teste de com um Array desorganizado
// const meias = [10, 20, 10, 20, 30, 50, 60, 20, 20, 10, 30, 50, 80, 40, 70, 40,60,70,80,90,50,30]
// console.log("Pilha de meias organizada pela cor:", organizar(meias))
// console.log("PARES organizados por cor:", pares(organizar(meias)))
// console.log("IMPARES restantes por cor:" , impares(organizar(meias)))

module.exports = {organizar, pares, impares}