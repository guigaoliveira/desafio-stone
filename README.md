# Desafio Stone - Programa de Formação em Elixir

O desafio foi resolvido usando a linguagem TypeScript, assim se faz necessário ter instalado na sua máquina:

* Node.js
* NPM

Para rodar os códigos, caso esteja vendo pelo git, faça o clone do repositório.

## Instalação de dependências
Executar o comando no terminal onde se encontra a pasta com o código do desafio: `npm install`, assim são instaladas as dependências necessárias.

## Instruções para rodar o código principal

No arquivo `index.ts` se encontra o código que testei a saída a função principal `main` do módulo `stoneChallenge.ts` usando `console.log`. É possível alterar a entrada da função de acordo com o que ela espera de argumentos e variar as entradas e para rodar o código basta executar no terminal dentro da pasta do desafio o comando `npm run-script start` ou `npx ts-node index.ts`. O módulo `stoneChallenge.ts` contém a função `main` criada para resolver o desafio e funções auxiliares a ela.

## Testes unitários

Para rodar os testes unitários criados basta executar no terminal dentro da pasta do desafio o comando `npm run-script test` ou `npx jest`, para gerar o code coverage com os testes basta usar o comando `npm run-script test:coverage` ou `npx jest --coverage`.

## Scripts
```sh
npm install  // instala todas as dependências
npm run-script start // roda o index.ts
npm run-script test // roda testes unitários
npm run-script test:coverage // roda testes unitários com coverage
npm run-script lint:format // para validar usando o ts-standard e formatar se possível
```

## Tecnologias usadas
* Node.js
* NPM
* TypeScript
* Jest
* Standard JS (ts-standard)

## Pequenas considerações

Para entrada da função `main` considera-se um array de objetos no formato `{ amount: number, price: number }`. Para a propriedade `amount` levou-se em conta que seja um número inteiro. Para a propriedade `price` considera-se que o valor é um número inteiro, representado em centavos. Retorna um objeto vazio `{}` caso os itens ou e-mails sejam arrays vazios.
