function mostraListaPilotos(){
    let secao = document.getElementById('pilotos');
    let lista = document.getElementById('listaPilotos'); 
    let btnOcultar = document.getElementById('aparecerBtnOcultar')

    secao.classList.add('pilotosAparecendo')
    lista.innerHTML = ''

    for(let i = 0; i < ranking.length; i++){
        let v = ranking[i];
        let li = document.createElement('li');
        li.textContent =` Nome: ${v.nome}, Nacionalidade: ${v.nacionalidade}, Equipe: ${v.equipe}, Posição: ${v.ranking}`
        lista.appendChild(li)
    }

    btnOcultar.classList.remove('ocultar')
    btnOcultar.classList.add('aparecerBtnOcultar')
}
