document.addEventListener('DOMContentLoaded', () => {
    const p1Buttons = document.querySelectorAll('#player1 button');
    const p2Buttons = document.querySelectorAll('#player2 button');
    const resultadoDiv = document.getElementById('resultado');

    let p1Choice = null;
    let p2Choice = null;

    p1Buttons.forEach(button => {
        button.addEventListener('click', () => {
            p1Choice = button.id.split('-')[1];
            checkChoices();
        });
    });

    p2Buttons.forEach(button => {
        button.addEventListener('click', () => {
            p2Choice = button.id.split('-')[1];
            checkChoices();
        });
    });

    function checkChoices() {
        if (p1Choice && p2Choice) {
            const p1Roll = rolarDado();
            const p2Roll = rolarDado();

            if (p1Roll === p2Roll) {
                handleFlag();
            } else {
                handlePlay(p1Choice, p2Choice, p1Roll, p2Roll);
            }

            p1Choice = null;
            p2Choice = null;
        }
    }

    function rolarDado() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function handleFlag() {
        const flagRoll = rolarDado();
        let mensagem = `Flag! Rolagem: ${flagRoll}. `;

        if (flagRoll % 2 === 0) {
            mensagem += "Falta de ataque. ";
            switch (flagRoll) {
                case 2: mensagem += "Offside - 5 jds"; break;
                case 4: mensagem += "Holding - 10 jds"; break;
                case 6: mensagem += "Pass Interference - 15 jds"; break;
            }
        } else {
            mensagem += "Falta de defesa. ";
            switch (flagRoll) {
                case 1: mensagem += "False Start - 5 jds"; break;
                case 3: mensagem += "Holding - 5 jds e 1st down"; break;
                case 5: mensagem += "Personal Fault - 15 jds"; break;
            }
        }

        resultadoDiv.innerText = mensagem;
    }

    function handlePlay(p1Choice, p2Choice, p1Roll, p2Roll) {
        let mensagem = `Jogador 1 escolheu ${p1Choice} e rolou ${p1Roll}. Jogador 2 escolheu ${p2Choice} e rolou ${p2Roll}. `;

        // Aqui você pode adicionar a lógica para cada combinação de jogadas
        // Exemplo básico:
        if (p1Choice === 'corrida' && p2Choice === 'passe-longo') {
            switch (p1Roll) {
                case 1: case 2: mensagem += "Ganho de 5 jds"; break;
                case 3: case 4: mensagem += "Ganho de 10 jds"; break;
                case 5: mensagem += "0 jds"; break;
                case 6: mensagem += "Ganho de 15 jds"; break;
            }
        }

        resultadoDiv.innerText = mensagem;
    }
});
