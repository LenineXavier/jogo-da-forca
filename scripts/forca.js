const arrPalavras = ["computador", "escola","roleta", "javascript", "monitor","falso","verdadeiro","carne","erros","ironhack","podcast","livros","gato","teclado","janela","porta","palavras","praia", "mar", "pedreira", "arrocha", "banguela", "desafio", "internet","palindromo", "vassalo","fantasia"];

let tentativas = 6;
let acertos = 0;
let imagem = 0;
let acertou;
    


let palavra = arrPalavras[Math.floor(Math.random() * arrPalavras.length)];




    for( let i = 0 ; i <  palavra.length ; i++ ){

        let span = document.createElement("span");
        span.setAttribute('class', palavra[i]);
        span.innerText = '';
        let div = document.getElementById("palavra");
        div.appendChild(span);
        
    }
    
  /* let capturandoLetras = "";

  function capturarLetras (){
      capturandoLetras = document.getElementById('valor').value;
      document.getElementById('palavra').innerHTML = capturandoLetras;
  } */

  //verificando letra digitada com palavra sorteada
const input = document.getElementById('valor')  
const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    
    if(palavra.includes(input.value)){
        const letraCorreta = document.querySelectorAll(`.${input.value}`)
        for(let i = 0 ; i < letraCorreta.length ; i++){
            letraCorreta[i].innerText = input.value;
        }
        input.value = "";
        acertou = true;
    }else{
        tentativas--;
        
        if(tentativas === 0){
            window.alert('Fim de jogo')
        }
        window.alert('Letra incorreta!');
        input.value = ""; 
        
        }
        
        console.log(tentativas)
      
})





