import { main, zipObject, sumTotalPriceItems, distributeNumber, isValidInput } from './stoneChallenge'

describe('Testes para as funções exportadas de stoneChallenge.ts', () => {
  it('deve retornar um objeto com chaves com emails e preços distribuidos mais igual possível', () => {
    const result = main(
      [
        { amount: 1, price: 100 },
        { amount: 2, price: 300 },
        { amount: 3, price: 100 }
      ],
      ['email1@test.com', 'email2@test.com', 'email3@test.com']
    )
    expect(result).toStrictEqual({
      'email1@test.com': 334,
      'email2@test.com': 333,
      'email3@test.com': 333
    })
  })

  it('deve retornar um objeto vazio caso as entradas sejam arrays vazios', () => {
    const result = main([], [])
    expect(result).toStrictEqual({})
  })

  it('deve retornar um objeto vazio caso as entradas não sejam definidas', () => {
    const result = main(undefined, undefined)
    expect(result).toStrictEqual({})
  })

  it('deve retornar um objeto vazio quando o array de items é vazio', () => {
    const result = main(
      [],
      ['email1@test.com', 'email2@test.com', 'email3@test.com']
    )
    expect(result).toStrictEqual({})
  })

  it('deve retornar um objeto vazio quando o array de emails é vazio', () => {
    const result = main([{ amount: 1, price: 100 }], [])
    expect(result).toStrictEqual({})
  })

  it('deve retornar um array de inteiros de tamanho igual ao divisor do número a ser distribuido', () => {
    const result = distributeNumber(100, 3)
    expect(result.length).toBe(3)
    expect(result).toStrictEqual([34, 33, 33])
  })

  it('deve retornar um array vazio para argumentos não definidos', () => {
    const result = distributeNumber(undefined, undefined)
    expect(result).toStrictEqual([])
  })

  it('deve retornar a soma o total dos preços dos itens', () => {
    const result = sumTotalPriceItems([
      { amount: 1, price: 100 },
      { amount: 2, price: 300 },
      { amount: 3, price: 500 },
      { amount: 0, price: 100 },
      { amount: 1, price: 0 }
    ])
    expect(result).toBe(2200)
  })

  it('deve retornar soma o total dos preços dos itens com lista de itens vazia', () => {
    const result = sumTotalPriceItems([])
    expect(result).toBe(0)
  })

  it('deve retornar soma o total dos preços dos itens com argumento de entrada não definido', () => {
    const result = sumTotalPriceItems(undefined)
    expect(result).toBe(0)
  })

  it('deve retornar um objeto para arrays de entrada de mesmo tamanho para chaves e valores', () => {
    const result = zipObject(
      ['email1@test.com', 'email2@test.com', 'email3@test.com'],
      [1, 2, 3]
    )
    expect(result).toStrictEqual({
      'email1@test.com': 1,
      'email2@test.com': 2,
      'email3@test.com': 3
    })
  })

  it('deve retornar um objeto para arrays de entrada vazios para chaves e valores', () => {
    const result = zipObject([], [])
    expect(result).toStrictEqual({})
  })

  it('deve retornar um objeto para arrays de entrada não definidos para chaves e valores', () => {
    const result = zipObject(undefined, undefined)
    expect(result).toStrictEqual({})
  })

  it('deve retornar verdadeiro para arrays de items e emails não vazios', () => {
    const result = isValidInput([
      { amount: 1, price: 100 }
    ],
    ['email1@test.com'])
    expect(result).toStrictEqual(true)
  })

  it('deve retornar falso para arrays de items e emails vazios', () => {
    const result = isValidInput([], [])
    expect(result).toStrictEqual(false)
  })

  it('deve retornar falso para arrays de items e emails não sejam definidos', () => {
    const result = isValidInput(undefined, undefined)
    expect(result).toStrictEqual(false)
  })
})
