const img = document.querySelectorAll(".img")
const department = document.querySelectorAll("h3")
const name = document.querySelectorAll("h2")
const age = document.querySelectorAll("span")

const request = new XMLHttpRequest()
request.open("GET", '../data/characters.json')
request.setRequestHeader("Content-type", "application/json")
request.send()

let data
request.onload =() =>{
    data = JSON.parse(request.response)
    img.forEach((element, index) => {
        element.style.backgroundImage = data[index].person_photo
        department[index].innerText = data[index].Department
        name[index].innerText = data[index].name
        age[index].innerHTML = data[index].age
    })
}

const requestAny = new XMLHttpRequest()
requestAny.open("GET", '../data/any.json')
requestAny.setRequestHeader("Content-type", "application/json")
requestAny.send()
requestAny.onload = () =>{
    console.log(requestAny.response)
}