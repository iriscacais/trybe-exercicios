// TDD - CRIAR O TESTE MAIS SIMPLES PRIMEIRO

const summationOf = require("./script");

describe('testes da funcao summationOf', () => {
   test ('Espera que a funcao summationOf exista.', () => {
    expect(typeof summationOf).toBe('function');
}); 

test ('Retorna 1: soma de 1 até 1 = 1', () => {
    expect(summationOf(1)).toBe(1);
}); 

test ('retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6', () => {
    expect(summationOf(3)).toBe(6);
});

test ('retorna 15: soma de 1 até 3 = 1 + 2 + 3 + 4 + 5 = 15', () => {
    expect(summationOf(5)).toBe(15);
});

test ('retorna 5050: soma de 1 até 100 ', () => {
    expect(summationOf(100)).toBe(5050);
});

test ('lança um erro quando o parametro foi undefined', () => {
    expect(() => {summationOf(undefined)}).toThrow('a funçao precisa ter um parametro');
});
});