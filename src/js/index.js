
// Passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrocel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - dar um jeito de indentificar o clique do usuário no botão
botoesCarrocel.forEach((botao,i) => {
    botao.addEventListener('click', () => {       
        // Passo 3 - desmarca o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        // Passo 4 - marcar o botão clicando como se estivesse selecionado
        botao.classList.add('selecionado');
        // Passo 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        // Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[i].classList.add('ativa');
    })
})