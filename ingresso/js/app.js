//Solução realizada por mim
let pista = 100;
let cadeiraSuperior = 200;
let cadeiraInferior = 400;

function comprar() {
    //Selecionar Ingressos
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    //Ingressos disponiveis
    let pistaDisponivel = document.getElementById('qtd-pista');
    let cadeiraInferiorDisponivel = document.getElementById('qtd-inferior');
    let cadeiraSuperiorDisponivel = document.getElementById('qtd-superior');

    if (quantidade > pista || quantidade > cadeiraInferior || quantidade > cadeiraInferior) {
        alert('Quantidade indisponível para compra!')
    } else {

        if (ingresso == 'pista') {
            alert('Comprar do ingresso da Pista realizado com Sucesso!')
            pista = pista - quantidade;
            pistaDisponivel.innerHTML = `${pista}`;

        }
        else if (ingresso == 'inferior') {
            alert('Comprar do ingresso da Cadeira Inferior realizado com Sucesso!')
            cadeiraInferior = cadeiraInferior - quantidade;
            cadeiraInferiorDisponivel.innerHTML = `${cadeiraInferior}`;
        }
        else {
            alert('Comprar do ingresso da Cadeira Superior realizado com Sucesso!')
            cadeiraSuperior = cadeiraSuperior - quantidade;
            cadeiraSuperiorDisponivel.innerHTML = `${cadeiraSuperior}`;
        }
    }
}

//Solução feita pelos Professores

// function comprar() {
//     let tipo = document.getElementById('tipo-ingresso');
//     let qtd = document.getElementById('qtd').value;

//     if (tipo.value == 'pista') {
//         comprarPista(qtd);
//     } else if (tipo.value == 'superior') {
//         comprarSuperior(qtd);
//     } else {
//         comprarInferior(qtd);
//     }
// }

// function comprarPista(qtd) {
//     let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
//     if (qtd > qtdPista) {
//         alert('Quantidade indisponível para tipo pista');
//     } else {
//         qtdPista = qtdPista - qtd;
//         document.getElementById('qtd-pista').textContent = qtdPista;
//         alert('Compra realizada com sucesso!');
//     }
// }

// function comprarSuperior(qtd) {
//     let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
//     if (qtd > qtdSuperior) {
//         alert('Quantidade indisponível para tipo superior');
//     } else {
//         qtdSuperior = qtdSuperior - qtd;
//         document.getElementById('qtd-superior').textContent = qtdSuperior;
//         alert('Compra realizada com sucesso!');
//     }
// }

// function comprarInferior(qtd) {
//     let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
//     if (qtd > qtdInferior) {
//         alert('Quantidade indisponível para tipo inferior');
//     } else {
//         qtdInferior = qtdInferior - qtd;
//         document.getElementById('qtd-inferior').textContent = qtdInferior;
//         alert('Compra realizada com sucesso!');
//     }
// }
