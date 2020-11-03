//#region ***  INIT / DOMContentLoaded  ***
const init = function () {
    console.log('DOM LOADED')
    document.querySelector('.js-logo').addEventListener('click', function(){
        document.querySelector('.js-logo').classList.add('c-animate-logo-expand')
    });
};

//#endregion

document.addEventListener("DOMContentLoaded", init);