const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const id = card.getAttribute('data-id');
    const display = card.querySelector('.contador');
    const btnAdd = card.querySelector('.btn-add');
    const btnReset = card.querySelector('.btn-reset');
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

    // Botão de zerar com SweetAlert estilizado para combinar com o tema
    btnReset.addEventListener('click', () => {
        Swal.fire({
            title: `Zerar caixinhas de ${nomeFuncionario}?`,
            text: "A energia mística será reiniciada para zero!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7b3fe4', 
            cancelButtonColor: '#1f252f', 
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
                    confirmButtonColor: '#7b3fe4',
                    background: '#221538',
                    color: '#e6dff9'
                });
            }
        });
    });
});
