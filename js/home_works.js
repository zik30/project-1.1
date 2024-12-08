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
const height = document.querySelector('.parent_block').clientHeight - smallRec.clientHeight

let x = 0
let y = 0
const moveRD = () =>{
    if(x < length ){
        x++
    }else if( x === length && y < height ){
        y++
    }else if ( y === height && x === length){
        requestAnimationFrame(moveLU)
        return
    }
    smallRec.style.left = `${x}px`
    smallRec.style.top = `${y}px`
    requestAnimationFrame(moveRD)
}
const moveLU = () => {
    if( x > 0) x--
    else if( x === 0 && y > 0) y--
    else if( y === 0 && x === 0){
        requestAnimationFrame(moveRD)
        return
    }
    smallRec.style.left = `${x}px`
    smallRec.style.top = `${y}px`
    requestAnimationFrame(moveLU)
}
moveRD()



//todo STOP WATCH

const startBtn = document.querySelector('#start')
const stoptBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')
let timeBlock = document.querySelector('#seconds')
let count = 0

var timer

startBtn.onclick = () => {

    timer = setInterval(() => {
        count++
        timeBlock.innerHTML = count
    }, 1000)
}

stoptBtn.onclick = () =>{
    clearInterval(timer)
    console.log()
}

resetBtn.onclick = () =>{
    clearInterval(timer)
    count = 0
    timeBlock.innerHTML = count
}