const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const id = card.getAttribute('data-id');
    const display = card.querySelector('.contador');
    const btnAdd = card.querySelector('.btn-add');
    const btnReset = card.querySelector('.btn-reset');

    let contagem = localStorage.getItem(id) || 0;
    display.innerText = contagem;

    btnAdd.addEventListener('click', () => {
        contagem++;
        display.innerText = contagem;
        localStorage.setItem(id, contagem); 
    });

   const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const id = card.getAttribute('data-id');
    const display = card.querySelector('.contador');
    const btnAdd = card.querySelector('.btn-add');
    const btnReset = card.querySelector('.btn-reset');
    const nomeFuncionario = card.querySelector('h3').innerText; // Pega o nome para personalizar o alerta

    let contagem = parseInt(localStorage.getItem(id)) || 0;
    display.innerText = contagem;

    btnAdd.addEventListener('click', () => {
        contagem++;
        display.innerText = contagem;
        localStorage.setItem(id, contagem); 
    });

    btnReset.addEventListener('click', () => {
        Swal.fire({
            title: `Zerar caixinhas de ${nomeFuncionario}?`,
            text: "Essa ação não pode ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#57449a', // Roxo da sua paleta
            cancelButtonColor: '#1f252f',  // Azul escuro da sua paleta
            confirmButtonText: 'Sim, zerar!',
            cancelButtonText: 'Cancelar',
            background: '#ffffff',
            color: '#1f252f'
        }).then((result) => {
            if (result.isConfirmed) {
                contagem = 0;
                display.innerText = contagem;
                localStorage.setItem(id, contagem);
                
                Swal.fire({
                    title: 'Zerado!',
                    text: `A contagem de ${nomeFuncionario} voltou para zero.`,
                    icon: 'success',
                    confirmButtonColor: '#57449a'
                });
            }
        });
    });
});
});