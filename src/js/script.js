const conteudo = document.querySelector('.conteudo');

let imgPrincipal = document.querySelector('.imgprincipal');
let imgSecundaria = document.querySelector('.segundaImg');

conteudo.addEventListener('mouseover', ()=>{
    imgPrincipal.classList.add('imgTroca');
    imgSecundaria.classList.remove('imgTroca');
})

conteudo.addEventListener('mouseout', ()=>{
    imgPrincipal.classList.remove('imgTroca');
    imgSecundaria.classList.add('imgTroca');
})