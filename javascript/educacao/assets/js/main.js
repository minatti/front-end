const loadingModal = (param) => {
    const modal = document.getElementById(param);
    if(modal){
        modal.classList.add('show');
        modal.addEventListener('click', (e) => {
            if(e.target.id == param || e.target.className == 'close'){
                modal.classList.remove('show');
                localStorage.closeModal = param;
            };
        });
    }
};




const modal = document.querySelector('.container--education .btnMat');
modal.addEventListener('click', () => loadingModal('modal--mat'));




