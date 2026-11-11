// --- ANIMAÇÃO DE ESTRELAS FLUIDAS NO FUNDO ---
document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.getElementById("stars-container");
    const numberOfStars = 100; // Quantidade ideal para preencher a tela toda

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        
        // Tamanhos variados (algumas menores ao fundo, outras maiores na frente)
        const size = Math.random() * 3 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Espalhadas por toda a largura da tela
        star.style.left = `${Math.random() * 100}vw`;
        
        // Começam em alturas aleatórias na tela para já nascerem espalhadas (não só embaixo)
        star.style.top = `${Math.random() * 100}vh`;
        
        // Velocidades variadas (de 4 a 10 segundos) para dar o movimento orgânico
        const duration = Math.random() * 6 + 4; 
        star.style.animationDuration = `${duration}s, ${Math.random() * 2 + 1}s`;
        
        // Atraso aleatório para começarem em momentos diferentes
        star.style.animationDelay = `-${Math.random() * duration}s`;
        
        starsContainer.appendChild(star);
    }
});

// --- LÓGICA DO CONTADOR ---
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const id = card.getAttribute('data-id');
    const display = card.querySelector('.contador');
    const btnAdd = card.querySelector('.btn-add');
    const btnReset = card.querySelector('.btn-reset');
    const btnSub = card.querySelector('.btn-sub');
    const nomeFuncionario = card.querySelector('h3').innerText; 

    let contagem = parseInt(localStorage.getItem(id)) || 0;
    display.innerText = contagem;

    btnAdd.addEventListener('click', () => {
        contagem++;
        display.innerText = contagem;
        localStorage.setItem(id, contagem); 
    });

    btnSub.addEventListener('click', () => {
        if (contagem > 0) {
            contagem--;
            display.innerText = contagem;
            localStorage.setItem(id, contagem);
        }
    });

    btnReset.addEventListener('click', () => {
        Swal.fire({
            title: `Zerar caixinhas de ${nomeFuncionario}?`,
            text: "A energia mística será reiniciada para zero!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8942f3', 
            cancelButtonColor: '#140b24', 
            confirmButtonText: 'Sim, zerar!',
            cancelButtonText: 'Cancelar',
            background: '#221538',
            color: '#e6dff9'
        }).then((result) => {
            if (result.isConfirmed) {
                contagem = 0;
                display.innerText = contagem;
                localStorage.setItem(id, contagem);
                
                Swal.fire({
                    title: 'Feitiço aplicado!',
                    text: `A contagem de ${nomeFuncionario} voltou para zero.`,
                    icon: 'success',
                    confirmButtonColor: '#8942f3',
                    background: '#221538',
                    color: '#e6dff9'
                });
            }
        });
    });
});

// --- LÓGICA DOS PAINÉIS DE CONFERÊNCIA ---
const confCards = document.querySelectorAll('.conf-card');

confCards.forEach(card => {
    const id = card.getAttribute('data-id');
    const display = card.querySelector('.contador-conf');
    const btnAdd = card.querySelector('.btn-conf-add');
    const btnSub = card.querySelector('.btn-conf-sub');
    const btnReset = card.querySelector('.btn-conf-reset');
    const inputLote = card.querySelector('.input-lote');
    const btnLoteAdd = card.querySelector('.btn-lote-add');
    const nomeConferente = card.querySelector('h3').innerText;

    let contagemConf = parseInt(localStorage.getItem(id)) || 0;
    display.innerText = contagemConf;

    btnAdd.addEventListener('click', () => {
        contagemConf++;
        display.innerText = contagemConf;
        localStorage.setItem(id, contagemConf);
    });

    btnSub.addEventListener('click', () => {
        if (contagemConf > 0) {
            contagemConf--;
            display.innerText = contagemConf;
            localStorage.setItem(id, contagemConf);
        }
    });

    btnLoteAdd.addEventListener('click', () => {
        const valorDigitado = parseInt(inputLote.value);
        if (!isNaN(valorDigitado) && valorDigitado > 0) {
            contagemConf += valorDigitado;
            display.innerText = contagemConf;
            localStorage.setItem(id, contagemConf);
            inputLote.value = ''; 
        }
    });

    inputLote.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            btnLoteAdd.click();
        }
    });

    btnReset.addEventListener('click', () => {
        Swal.fire({
            title: `Zerar conferências de ${nomeConferente}?`,
            text: "O registro de conferência será reiniciado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8942f3',
            cancelButtonColor: '#140b24',
            confirmButtonText: 'Sim, zerar!',
            cancelButtonText: 'Cancelar',
            background: '#221538',
            color: '#e6dff9'
        }).then((result) => {
            if (result.isConfirmed) {
                contagemConf = 0;
                display.innerText = contagemConf;
                localStorage.setItem(id, contagemConf);
                
                Swal.fire({
                    title: 'Atualizado!',
                    text: `A contagem de ${nomeConferente} voltou para zero.`,
                    icon: 'success',
                    confirmButtonColor: '#8942f3',
                    background: '#221538',
                    color: '#e6dff9'
                });
            }
        });
    });
});
