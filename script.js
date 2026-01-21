//PEGAR O ELEMENTO
const doutora = document.getElementById('doutora');

//EVENTO QUANDO O MOUSE ESTIVER POR CIMA DA IMAGEM
doutora.addEventListener('mouseover', function () {
    doutora.src = "img/outra.webp";
});

//EVENTO QUANDO O MOUSE SAIR POR CIMA DA IMAGEM
doutora.addEventListener('mouseout', function () {
    doutora.src = "img/Doctora1.webp";
});