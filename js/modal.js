const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');

function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = "hidden"
}

setTimeout(openModal, 10000);

modalTrigger.onclick = openModal

const scrollBottom = () =>{
    let height = window.scrollY+document.documentElement.clientHeight
    if( Math.round(height) === document.body.offsetHeight ){
        openModal()
        window.removeEventListener('scroll', scrollBottom)
    }
}

window.addEventListener('scroll', scrollBottom)


modal.onclick = (event) =>{
    if(event.target === modal  || event.target.classList.contains('modal_close') ){
        modal.style.display = 'none'
        document.body.style.overflow = ''
    }
}