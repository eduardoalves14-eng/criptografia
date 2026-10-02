// Seleção dos elementos do HTML
const inputPalavra = document.getElementById('palavra');
const botaoCriptografar = document.getElementById('botao-criptografar');
const botaoLimpar = document.getElementById('botao-limpar');
const mensagemErro = document.getElementById('mensagem');
const resultadoTexto = document.getElementById('palavra-criptografada');
const listaTransformacoes = document.getElementById('lista-transformacoes');

// Função principal de criptografia
function criptografar() {
    const palavraOriginal = inputPalavra.value.trim();

    // Validação: verifica se o campo está vazio
    if (palavraOriginal === "") {
        mensagemErro.textContent = "Por favor, digite uma palavra válida.";
        return;
    }

    // Limpa mensagens de erro anteriores
    mensagemErro.textContent = "";

    let palavraCriptografada = "";
    let historicoTransformacoes = "";

    // Loop para processar cada letra da palavra
    for (let i = 0; i < palavraOriginal.length; i++) {
        let letraOriginal = palavraOriginal[i];
        let letraNova = letraOriginal;

        // Verifica se é uma letra maiúscula (A-Z)
        if (letraOriginal >= 'A' && letraOriginal <= 'Z') {
            if (letraOriginal === 'Z') {
                letraNova = 'A'; // Trata o fim do alfabeto
            } else {
                letraNova = String.fromCharCode(letraOriginal.charCodeAt(0) + 1);
            }
        }
        // Verifica se é uma letra minúscula (a-z)
        else if (letraOriginal >= 'a' && letraOriginal <= 'z') {
            if (letraOriginal === 'z') {
                letraNova = 'a'; // Trata o fim do alfabeto
            } else {
                letraNova = String.fromCharCode(letraOriginal.charCodeAt(0) + 1);
            }
        }

        palavraCriptografada += letraNova;
        
        // Cria a linha de explicação para a lista
        historicoTransformacoes += `<li>A letra <strong>"${letraOriginal}"</strong> mudou para <strong>"${letraNova}"</strong></li>`;
    }

    // Atualiza a interface com os resultados
    resultadoTexto.textContent = palavraCriptografada;
    listaTransformacoes.innerHTML = historicoTransformacoes;
}

// Função para limpar os campos e resetar a tela
function limparCampos() {
    inputPalavra.value = "";
    mensagemErro.textContent = "";
    resultadoTexto.textContent = "Aguardando uma palavra...";
    listaTransformacoes.innerHTML = "<li>As transformações aparecerão aqui.</li>";
}

// Ouvintes de eventos (Event Listeners) para os botões
botaoCriptografar.addEventListener('click', criptografar);
botaoLimpar.addEventListener('click', limparCampos);

// Permite criptografar também ao apertar a tecla "Enter" no input
inputPalavra.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        criptografar();
    }
});
