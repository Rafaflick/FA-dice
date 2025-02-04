function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function simularJogada() {
    const dado1 = rolarDado();
    const dado2 = rolarDado();
    const resultado = dado1 + dado2;

    let mensagem = `Você rolou ${dado1} e ${dado2}. Total: ${resultado}. `;

    if (resultado >= 7) {
        mensagem += "Jogada bem-sucedida!";
    } else {
        mensagem += "Jogada falhou!";
    }

    document.getElementById('resultado').innerText = mensagem;
}

document.getElementById('jogar').addEventListener('click', simularJogada);
