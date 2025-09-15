const botaMostraPalavras = document.querySelector("#botao-palavrachave"):
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);
function mostraPalavrasChave(){
 const texto = document.querySelector ("#entrada-de-texto").value;
 const campoResultado = document.querySelector ("#resultado-palayrachave"):
 const palavras Chave = processa Texte(texto):
campoResultado.textContent = palavrasChave.joinC(",");
}
function processaTexto(texto){
     let palavras = texto.split(/\P{L}+/u);
   
     let de frequencias = {};
     for(let i in plavras){
          frequencias[i] = 0;
          for (let j of palavras) {
             if (i == j){
                 frequencia[i]++;
              }
          }
     }

     consolo.log(requencias);

     return palavras;
}