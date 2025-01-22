const conteudo = document.querySelector('.conteudo');

let imgPrincipal = document.querySelector('.imgprincipal');
let imgSecundaria = document.querySelector('.segundaImg');
let conteudoSobre = document.querySelector('.sobre');
let btnEfeito = document.querySelector('.btn');
let efeitoSpan = document.querySelector('.bx');

conteudo.addEventListener('mouseover', ()=>{
    imgPrincipal.classList.add('imgTroca');
    imgSecundaria.classList.remove('imgTroca');
    conteudoSobre.classList.add('opacidade');
})

conteudo.addEventListener('mouseout', ()=>{
    imgPrincipal.classList.remove('imgTroca');
    imgSecundaria.classList.add('imgTroca');
    conteudoSobre.classList.remove('opacidade');
})

btnEfeito.addEventListener('mouseover', ()=>{
    efeitoSpan.style.opacity= 1;
})

btnEfeito.addEventListener('mouseout', ()=>{
    efeitoSpan.style.opacity= 0;
})
