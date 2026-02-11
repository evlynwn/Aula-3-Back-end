/*
 *Objetivo: Criar uma aplicação que realiza calculos dejuros utilizado 
 *funções para modularizar o codigo 
 * Autor:
 *  Data:
 * Versão:1.0
 */

 const readline = require('readline')

 //
 const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })

 entradaDeDados.question('Digite o nome do cliente:', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto', function(produto){
        let nomeProtuto = produto

        entradaDeDados.question('Digete o valor da compra', function(compra){
            let valorCompra = compra

            //entrada de taxa de juros
            entradaDeDados.question('Digite a taxa de juros', function(taxa){
                let taxaJuros = taxa

                //entrada da qtdeParcelas
                entradaDeDados.question('Digite a quantidade de parcelas: ', function(parcelas){
                    let qtdeParcelas = parcelas

                    let calculos = require('./modolo/calculos.js')


                    let montante = calculos.calcularJurosCompostos(valorCompra,taxaJuros,qtdeParcelas)

                    if(montante){
                        console.log('O valor final é:' + montante)
                    }else{
                        console.log('ERRO: Não foi possivel processar o calculo.')
                        entradaDeDados.close()
                    }

                


                    //Validações

                    //Calculo
                    //let percentual = calcularPercentual(valorJuros)


                   // console.log(typeof(parcelas))
                   // console.log(parcelas)
                    //let montante = Number(valorCompra) * ((1 + percentual) ** Number(qtdeParcelas))

                    //console.log('O valor final é:' + montante.toFixed(2))
                })
            })
        })
    })
 })

//  //Função para retornar o percentual de um número
// function calcularPercentual (numero){
// }
 
// //Função para retornar o montante referente a juros composto
// function calcularJurosCompostos(valor,taxa,parcelas){

//     //Recebe os valores dos argumentos e converte em numero
//     let valorPrincipal = Number(valor)
//     let taxaJuros = Number(taxa)
//     let qtdeParcelas = Number(parcelas)


//     if(valor == '' || isNaN(valor) || valor <=0 || parcelas <=0 || isNaN(parcelas)){
//         return false
//     }else{
//     //Chama a função retornar o percentual da taxa
//     let percentual = calcularPercentual(taxaJuros)

//     if(percentual){
//         //Calculo
//         let montante = valorPrincipal * ((1 + percentual) **qtdeParcelas)
//         return Number (montante.toFixed(2))
//     }else{
//         return false
//     }

// }
//     //Recebe o numero encaminhado
//     let numeroPercentual = Number(numero)

//     //Validação de entrada vazia, menor ou igual a zero
//     if(numero = '' || numero <=0 || isNaN(numero)){
//         return false
//     }else{

    
//     //Calcula o percentual do número
//     let percentual = numeroPercentual / 100

//     return Number (percentual.toFixed(2))
//     }
// }
 