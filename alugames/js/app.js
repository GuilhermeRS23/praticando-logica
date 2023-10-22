function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagem = gameSelecionado.querySelector('.dashboard__item__img');
    let button = gameSelecionado.querySelector('.dashboard__item__button');

    // let nomeJogo = gameSelecionado.querySelector('.dashboard__item__name');
    // alert(nomeJogo.textContent); //Teste

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.innerHTML = 'Alugar';

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.innerHTML = 'Devolver';
    }
}