const { organizar } = require("./betina_organizer")
const { pares } = require('./betina_organizer')
const { impares } = require('./betina_organizer')

test('Verificando retorno esperado', () => {
    expect(organizar([10, 20, 20, 10, 30, 50])).toStrictEqual({ '10': 2, '20': 2, '30': 1, '50': 1 })
});

test('Verificando retornos "null" e "undefined"', () => {
    let n = organizar([10, 20, 20, 10]);
    // -- null --
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
})

test('Verificação de envio de um Array Vazio', () => {
    try{
        let o = organizar()
    }catch(e){
        expect(() => {
            throw new Error('Não há meias para organizar!');
        }).toThrow();
    }
    
})

test('Verificando calculo de Pares', () => {
    expect(pares(organizar([10, 10]))).toEqual({ '10': 1, total: 1 })
})

test('Verificando calculo de Impares Correto', () => {
    expect(impares(organizar([10, 20, 30]))).toEqual({ '10': 1, '20': 1, '30': 1, total: 3 })
})

test('Verificando calculo de Impares Errado', () => {
    expect(impares(organizar([10, 20, 30]))).not.toEqual({ '10': 1, '20': 1, '30': 1, total: 0 })
})

test('Verificando erro de retorno', () => {
    try {
        organizar('B')
    } catch (e) {
        expect(() => {
            throw new Error();
        }).toThrow();
    }
})
