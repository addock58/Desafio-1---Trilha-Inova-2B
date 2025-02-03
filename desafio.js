//Desafio 1 - Trilha Inova

// 1. Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
let nome = 'Pedro'
console.log(nome)

// 2. Crie duas variáveis uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.
let idade = 25
let altura = 1.75
console.log(idade, altura)

// 3. Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
let preco = 50
let desconto = 0.2
console.log(preco - (preco * desconto))

// 4. Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem Está calor!. Caso contrário, exiba Está fresco!.

let temperatura = 30
if(temperatura > 25){
    console.log('Está calor!')
}else{
    console.log('Está fresco!')
}

//5. Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba Você é maior de idade. Caso contrário, exiba Você é menor de idade.

let idade_5 = 18 
if(idade_5 >= 18){
    console.log('Você é maior de idade')
}else{
    console.log('Você é menor de idade')
}

//6. Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba Aprovado. Se for entre 5 e 6, exiba Recuperação. Caso contrário, exiba Reprovado.

let nota = 7
if(nota >= 7){
    console.log('Aprovado')
}else if(nota >= 5 && nota < 7){
    console.log('Recuperação')
}else{
    console.log('Reprovado')
}

//7. Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba Os números são iguais. Caso contrário, exiba Os números são diferentes.

let numero1 = 10
let numero2 = 10
if(numero1 == numero2){
    console.log('Os números são iguais')
}else{
    console.log('Os números são diferentes')
}

//8. Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem Olá, meu nome é [nome] e eu tenho [idade] anos, utilizando concatenação.

let nome_8 = 'Pedro' 
let idade_8 = 23 //adicionei o numeo 8 para não dar conflito com a variável nome do exercício 1 e idade do exercício 2
console.log(`Olá, meu nome é ${nome_8} e eu tenho ${idade_8} anos`)

//9. Crie um loop que imprima os números de 1 a 10 na tela.

for(let i = 1; i <= 10; i++){
    console.log(i)
}

//10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.

let numero_10 //adicionei o numeo 10 para não dar conflito com a variável numero do exercício 7
while(numero_10 != 5){
    numero_10 = prompt('Digite um número: ')
}

//11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.

for(let i = 1; i <= 10; i++){
    console.log(`7 + ${i} = ${7*i}`)
}

//12. Crie um loop que exiba todos os números pares de 0 a 20.

for(let i = 0; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

//13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.

function areaCirculo(raio){
    let pi = 3.14
    return pi * raio * raio
}
console.log(areaCirculo(5))

//14. Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.

    //Função para calcula a soma (Variváveis chamadas de num 1 e 2 para não dar conflito com as variáveis dos exercícios anteriores)
function soma(num1, num2){ //Função que recebe dois parâmetros referentes aos números que serão somados
    return num1 + num2 //A função retorna a soma dos dois números
}
console.log(soma(5, 5)) //Chamada da função soma passando os números 5 e 5 como parâmetros resultando em 10

//15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções

let x = 10 //Valor de x
let y = 20 //Valor de y
let z = x + y //Soma de x e y
console.log(z) //Exibição do resultado