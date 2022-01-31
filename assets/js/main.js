const btnOpen = document.getElementById('btn__modal-open'),
      btnClose = document.getElementById('btn__close'),
      modal = document.getElementById('modal__window');

        btnOpen.addEventListener('click', () => {
            modal.classList.add('active');
            btnOpen.classList.add('closes');
        });
        const closeModal = () => {
            modal.classList.remove('active');
            btnOpen.classList.remove('closes');
        }

btnClose.addEventListener('click', closeModal);