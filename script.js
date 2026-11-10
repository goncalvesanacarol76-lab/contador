const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const id = card.getAttribute('data-id');
    const display = card.querySelector('.contador');
    const btnAdd = card.querySelector('.btn-add');
    const btnReset = card.querySelector('.btn-reset');
    const btnSub = card.querySelector('.btn-sub');
    const nomeFuncionario = card.querySelector('h3').innerText; 

    // Carrega o valor salvo ou inicia com 0
    let contagem = parseInt(localStorage.getItem(id)) || 0;
    display.innerText = contagem;

    // Botão de incrementar
    btnAdd.addEventListener('click', () => {
        contagem++;
        display.innerText = contagem;
        localStorage.setItem(id, contagem); 
    });

    // Botão de diminuir 1 (caso clique duplo)
    btnSub.addEventListener('click', () => {
        if (contagem > 0) {
            contagem--;
            display.innerText = contagem;
            localStorage.setItem(id, contagem);
        }
    });

    // Botão de zerar com SweetAlert estilizado para o tema místico
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

// Lógica dos painéis de Conferência (Ana Carol e Jheni)
const confCards = document.querySelectorAll('.conf-card');

confCards.forEach(card => {
    const id = card.getAttribute('data-id');
    const display = card.querySelector('.contador-conf');
    const btnAdd = card.querySelector('.btn-conf-add');
    const btnSub = card.querySelector('.btn-conf-sub');
    const btnReset = card.querySelector('.btn-conf-reset');
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
