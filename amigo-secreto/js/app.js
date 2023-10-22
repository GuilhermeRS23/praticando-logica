let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmingos = document.getElementById('lista-amigos');

    if (nomeAmigo.value == '') {
        alert("Por favor informe um amigo!")
    } else if (amigos.includes(nomeAmigo.value)) {
        alert(`Amigo ${nomeAmigo.value} já foi adicionado a lista!`)
        nomeAmigo.value = '';
    }
    else {
        amigos.push(nomeAmigo.value);
        listaAmingos.innerHTML = amigos;
        nomeAmigo.value = '';
    }
}


function sortear() {
    if (amigos.length < 4) {
        alert("Número de Participantes invalido! Mínimo 4 participantes");

    } else {
        let listaSorteio = document.getElementById('lista-sorteio');
        embaralha(amigos);

        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
        }
    }

}

//Função para embaralhar os nomes
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = ' ';
    document.getElementById('lista-sorteio').innerHTML = ' ';
}