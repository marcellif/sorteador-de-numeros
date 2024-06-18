function sorteia(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numero;
    let listaSorteados = [];
        for (let i = 0; i< quantidade; i++){
            numero = numerosAleatoriosEntreLimites (de, ate);

            while (listaSorteados.includes(numero)){
                numero = numerosAleatoriosEntreLimites (de, ate);
            }
            listaSorteados.push(numero);
        }
        
    let mensagem = document.getElementById('resultado');
    mensagem.innerHTML = `<label class="texto__paragrafo"> Numeros sorteados: ${listaSorteados} </label>`
}

function numerosAleatoriosEntreLimites (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}