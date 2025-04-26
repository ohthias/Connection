const tempos = {
    foco: 25 * 60,
    descanso: 5 * 60
};

let tempoAtual = tempos.foco;
let tipoAtual = 'foco';
let intervalo = null;
let estaRodando = false;
let alertaAtivo = false;

const tempoDisplay = document.querySelector('.temporizador-time');
const switchButton = document.getElementById('switchButtonTemporizador');
const resetButton = document.getElementById('resetButtonTemporizador');
const alertButton = document.getElementById('alertButtonTemporizador');
const botaoFoco = document.getElementById('switchTypeTemporizadorFoco');
const botaoRelax = document.getElementById('switchTypeTemporizadorRelax');

function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
}

function atualizarDisplay() {
    tempoDisplay.textContent = formatarTempo(tempoAtual);
}

function alternarTemporizador() {
    if (estaRodando) {
        clearInterval(intervalo);
        switchButton.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
    } else {
        intervalo = setInterval(() => {
            if (tempoAtual > 0) {
                tempoAtual--;
                atualizarDisplay();
            } else {
                clearInterval(intervalo);
                estaRodando = false;
                switchButton.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
                if (alertaAtivo) alertarUsuario();
                trocarTipo(tipoAtual === 'foco' ? 'descanso' : 'foco');  // Troca o tipo de foco para descanso ou vice-versa
            }
        }, 1000);
        switchButton.innerHTML = '<span class="material-symbols-outlined">pause</span>';
    }
    estaRodando = !estaRodando;
}

// Ativar ou desativar o alerta
function alternarAlerta() {
    alertaAtivo = !alertaAtivo;
    alertButton.classList.toggle('active', alertaAtivo);

    if (alertaAtivo && "Notification" in window) {
        Notification.requestPermission();
    }
}

// Resetar o temporizador
function resetarTemporizador() {
    clearInterval(intervalo);
    estaRodando = false;
    tempoAtual = tempos[tipoAtual];
    atualizarDisplay();
    switchButton.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
}

// Trocar entre Foco e Descanso
function trocarTipo(tipo) {
    tipoAtual = tipo;
    resetarTemporizador();

    // Remove 'active' de todos os botões primeiro
    botaoFoco.classList.remove('active');
    botaoRelax.classList.remove('active');

    // Depois adiciona 'active' no botão correto
    if (tipo === 'foco') {
        botaoFoco.classList.add('active');
    } else {
        botaoRelax.classList.add('active');
    }

    tempoAtual = tempos[tipo];  // Ajusta o tempo de acordo com o tipo
    atualizarDisplay();
}

// Notificar o usuário com som e/ou alerta visual
function alertarUsuario() {
    tocarSomAlerta();

    if (Notification.permission === 'granted') {
        new Notification('Tempo Finalizado!', {
            body: tipoAtual === 'foco' ? 'Hora de descansar!' : 'Hora de focar novamente!'
        });
    } else {
        alert('Tempo Finalizado!');
    }
}

// Função para tocar o som de alerta
function tocarSomAlerta() {
    const audio = new Audio('assets/som-alerta.mp3');
    let contador = 0;
    
    const intervaloSom = setInterval(() => {
        audio.play().catch(error => console.error('Erro ao tocar som:', error));
        contador++;

        if (contador === 3) {
            clearInterval(intervaloSom);  // Para de tocar o som depois de 3 vezes
        }
    }, 1000);
}

switchButton.addEventListener('click', alternarTemporizador);
resetButton.addEventListener('click', resetarTemporizador);
alertButton.addEventListener('click', alternarAlerta);
botaoFoco.addEventListener('click', () => trocarTipo('foco'));
botaoRelax.addEventListener('click', () => trocarTipo('descanso'));

atualizarDisplay();
