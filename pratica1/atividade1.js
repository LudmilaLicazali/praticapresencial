// ATIVIDADE PRATICA DO DIA 01/02/2024

let prompt = require ('prompt-sync')()

console.log("Serviços disponiveis:");
    
console.log(" 1 -> + : soma " +  
            " 2 -> - : subtração " + 
            " 3-> / : divisão " + 
            " 4 -> * : multiplicação "
            );

valor1 = parseInt(prompt("Digite 1º valor: "))           

operacao = parseInt(prompt("Escolha a operação (+ - / * ): ")); 
    
    if (!isNaN(operacao)){
    valor2 = parseInt(prompt("Digite 2º valor: "))
    } else {
            console.log("Você precisa escolher: 1 para soma (+) " +  
                                            " 2 para subtração (-) " + 
                                            " 3 para divisão (/)" + 
                                            " ou 4 para multiplicação (*)");
            } 

operacao = parseInt(prompt("Escolha a operação (+ - / * ): ")); 

valor2 = parseInt(prompt("Digite 2º valor: "))    
    
switch (operacao){
             
    case 1:    
            console.log(valor1 + valor2)
    break;
    }