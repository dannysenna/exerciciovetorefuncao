//Exercicios JavaScript Vetores e Funções

//Exercício 1

console.log("Vetor de 8 posições:")
var vetor = [];

for(i=0;i<8;i++)
{
    cubo=i**3;
    vetor.push(cubo);
}

console.log(vetor);


//Exercício 2 

var V = [5,1,4,2,7,8,3,6];
var v2 = [];

for(i=0; i<8;i++)
{
    var valor = V[i];
    var dobro = valor*2;
    v2.push(dobro);
}

console.log(v2);


//Exercício 3

var vetorA = [];

for(i=0;i<5;i++)
{
    num= parseInt(prompt("Digite um valor para o vetor A"));
    vetorA.push(num);
}

var x = parseInt(prompt("Digite um número para x"));

var m = [];

for(i=0;i<vetorA.length;i++)
{
    var resultado = vetorA[i]*x;
    m.push(resultado);
}
 console.log("O vetor A é: " + vetorA+ " e o vetor M é: " + m);


 //Exercício 4

var vetorNome = [];

for(i=0; i<5;i++)
{
    nome = prompt("Digite seu nome:");
    vetorNome.push(nome);
}

console.log(vetorNome);

var pessoa = prompt("Digite um nome para pesquisa:");

var encontrou = false;

for(i=0;i<vetorNome.length;i++)
{
    var pesquisa= vetorNome[i]
    if(pesquisa===pessoa){
        encontrou = true;
        break;
    }
}

if(encontrou)
{
    console.log("Achei, o nome " + pessoa + " foi encontrado na pesquisa! ");
}else
{
    console.log("Não Achei, o nome " + pessoa + " não foi encontrado na pesquisa!");
}


//Exercício 5

var vetorQ= [];

for(i=0; i<9;i++)
{
    var num = parseInt(prompt("Digite um número par:"));
    if(num % 2 === 0)
    {
        vetorQ.push(num);
    }else
    {
        console.log("Digite apenas números pares!");
        i--;
    }
}

var maior = vetorQ[0];
var posicao = 0;

for(i=0;i<vetorQ.length;i++)
{
    if(vetorQ[i] > maior)
    {
        maior=vetorQ[i];
        posicao = i;
    }
}

console.log(vetorQ);
console.log("O maior valor é: " + maior+ " e sua posição é: " + posicao);


//Exercício 6

const DiasSemana = 7;

var temperatura = [];

for ( i = 0; i < DiasSemana; i++) {
  var temp= parseFloat(prompt(`Digite a temperatura média do dia ${i + 1}:`));
  temperatura.push(temp);
}
var menorTemp= Math.min(...temperatura);

var maiorTemp = Math.max(...temperatura);

var somaTemp = 0;
for (i = 0; i < DiasSemana; i++) {
  somaTemp += temperatura[i];
}
var tempMedia = somaTemp / DiasSemana;

var AbaixoMedia = 0;
for (i = 0; i < DiasSemana; i++) {
  if (temperatura[i] < tempMedia) {
    AbaixoMedia++;
  }
}

console.log(temperatura);
console.log("A menor temperatura da semana é: " + menorTemp);
console.log("A maior temperatura da semana é: " + maiorTemp);
console.log("A temperatura média semanal é: " + tempMedia);
console.log("O número de dias com temperatura abaixo da média é: " + AbaixoMedia);


//Exercício 7

var vetor = [];

for ( i = 0; i < 5; i++) {
  var valor= parseInt(prompt(`Digite um valor para meu vetor:`));
  vetor.push(valor);
}

function ordenarVetor(vetor){
    var vetordenado = vetor.sort(function(a,b)
    {
        return a-b;
    })
    return vetordenado;
}

console.log(`Meu vetor é: ${vetor}`);

console.log(`Meu vetor ordenado é: ${ordenarVetor(vetor)}`);


//Exercício 8

var valor = prompt("Digite um valor:");

var metro = parseFloat(valor);

const d = metro * 10;
const c = metro * 100;
const m = metro * 1000;

console.log(`O valor em metros é: ${metro}, em decímetros é: ${d}, em centímetros é: ${c}, e, em milímetros é: ${m}`);
  

//Exercício 9

var valor = [];

for(let i=0;i<3;i++){
    var num = parseInt(prompt("Digite um valor:"+ (i + 1) + ":"));
    valor.push(num);
}

function somar(valor){
    var s = 0;
    for(let i=0;i<valor.length;i++)
    {
        s += valor[i];
    }
    return s;
}

function media(valor){
    var s = somar(valor);
    m = s/valor.length;
    return m;
}

console.log("O valor da soma é: " + somar(valor) + " e a média é: "+ media(valor));


//Exercício 10

var grau = parseFloat(prompt("Digite um valor:"));

function celsius(grau){
    var c = (grau-32)*(5/9);
    return c;
}

console.log("A conversão de grau Fahrenheit para Celsius é: " + celsius(grau));


//Exercício 11

var num = parseFloat(prompt("Digite um valor: "));

function retornar(num){
    if (num>0){
        console.log("O valor: " + num + " é um número Positivo.");
    }else{
        console.log("O valor: " + num + " é um número Negativo ou Igual a Zero.");
    }
    return num;
}

retornar(num);


//Exercício 12

var vetor = [];
var N = parseInt(prompt("Digite a quantidade de números a serem inseridos:"));

for(i=0;i<N;i++){
    var num = parseInt(prompt("Digite um valor: "+ (i + 1) + ":"));
    vetor.push(num);
}
var maior = vetor[0];
var posicao = 0;

for(i=0;i<vetor.length;i++)
{
    if(vetor[i] > maior)
    {
        maior=vetor[i];
        posicao = i;
    }
}

console.log(vetor);
console.log("O maior valor é: " + maior+ " e sua posição é: " + posicao); 


//Exercício 13

var numUsuario = parseInt(prompt("Digite um número inteiro:"));

function contarDigitos(numero) {
    var numeroString = numero.toString();
    return numeroString.length;
}

var Digitos = contarDigitos(numUsuario);
console.log("O número digitado possui " + Digitos + " dígitos.");
  

//Exercício 14

var fatorial = parseInt(prompt("Digite um valor para calcular o fatorial dele:"));
var resultado = fatorial;

for(i=1;i<fatorial;i++){
    resultado *=i;
}

console.log("O resultado da fatorial do número: "+ fatorial + " é:" + resultado);


//Exercício 15

function reajustarPrecos() {
    var produtos = [];
    var numProdutos = parseInt(prompt('Digite o número de produtos que deseja na lista:'));
  
    for (let i = 0; i < numProdutos; i++) {
      var nome = prompt(`Digite o nome do produto  ${i+1}: `);
      var preco = parseFloat(prompt(`Digite o preço do produto  ${i+1}: `));
      produtos.push({ nome, preco });
    }

    for (let i = 0; i < produtos.length; i++) {
      var p = produtos[i];
      var preco = p.preco;

      if (preco < 150) {
        var novoPreco = preco * 1.1;
        p.preco = novoPreco;
      }
    }

    produtos.sort((a, b) => a.preco - b.preco);
  
    for (let i = 0; i < produtos.length; i++) {
      var produto = produtos[i];
      console.log(`${produto.nome} - ${produto.preco.toFixed(2)}`);
    }
}

reajustarPrecos();


  


