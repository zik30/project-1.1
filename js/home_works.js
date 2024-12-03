//todo GMAIL

const gmailInp = document.querySelector('#gmail_input');
const gmailBtn = document.querySelector('#gmail_button');
const gmailCheck = document.querySelector('#gmail_result');

const regExp = /^[a-z][\w]+@gmail\.com$/i

gmailBtn.onclick = () =>{
    if(regExp.test(gmailInp.value)) {
        gmailCheck.innerHTML = "OK"
        gmailCheck.style.color = 'green'
    }else{
        gmailCheck.innerHTML = "Enter valid mail address"
        gmailCheck.style.color = 'red'
    }
}


//todo MOVE BLOCK

const smallRec = document.querySelector('.child_block')
const length = document.querySelector('.parent_block').clientWidth - smallRec.clientWidth

let count = 0
const move = () =>{
    count++
    smallRec.style.left = `${count}px`
    if(count < length-1){
        requestAnimationFrame(move)
    }
}
move()