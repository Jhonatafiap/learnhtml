const Methods = {
    init() {
        Methods.menu();
    },

    menu(){
        const btn = document.querySelector('.hamburguer');
        const nav = document.querySelector('header nav');

        btn.addEventListener('click', ev => {
            const $this = ev.currentTarget;
            
            $this.classList.toggle('is--active');
            nav.classList.toggle('is--active');
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Methods.init();
});