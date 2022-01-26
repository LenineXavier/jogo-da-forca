const arrPalavras = ["computador", "escola","rota", "javascript", "monitor","falso","verdadeiro","carne","erros","ironhack","podcast","livros","gato","teclado","janela","porta","palavras","praia", "mar", "pedreira", "arrocha", "banguela", "desafio", "internet","palindromo", "vassalo","fantasia"];

let tentativas = 6;
let acertos = 0;
let imagem = 0;

    


    const palavra = arrPalavras[Math.floor(Math.random() * arrPalavras.length)];




    for( i = 0 ; i < arrPalavras.length ; i++ ){

        let span = document.createElement("span");
    span.setAttribute('id', i);
        let div = document.getElementById("palavra");
        div.appendChild(span);
        
    }
    
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let letras = alfabeto.split("");

for (i = 0; i < letras.length; i++) {
    let botao = document.createElement("button");
    let letra = document.createTextNode(letras[i]);
    
    botao.appendChild(letra);
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[i]+'\')');
    botao.setAttribute('id', letras[i]);

    let div = document.getElementById("letras");
    div.appendChild(botao);
}
function escolheLetra(){
    
}

