//todo  PHONE BLOCK

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/   //maska

phoneButton.onclick = ()=>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerHTML = 'Invalid Phone Number'
        phoneResult.style.color = 'red'
    }
}

//todo TAB SLIDER

const blocks = document.querySelectorAll('.tab_content_block')
const items = document.querySelectorAll('.tab_content_item')
const itemsParent = document.querySelector('.tab_content_items')

const hideContent = () =>{
    blocks.forEach((block) => {
        block.style.display = 'none'
    })
    items.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showContent = (index = 0) =>{
    blocks[index].style.display = 'block'
    items[index].classList.add('tab_content_item_active')
}
hideContent()
showContent()

let count = 0
let intervals = setInterval(() => {
    hideContent()
    showContent(count++)

    if( count === items.length ){
        count=0
    }
},3000)

itemsParent.onclick = (event)=>{
    if(event.target.classList.contains('tab_content_item')){
        items.forEach( (item, index) => {
            if(event.target === item){
                hideContent()
                showContent(index)
                count = index
            }
        })
    }
}