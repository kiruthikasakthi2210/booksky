//selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select the cancel button
var cancelbutton = document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select the container ,add-book , book-title-input,book-author-input,book-description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")


//selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select the cancel button
var cancelbutton = document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select the container ,add-book , book-title-input,book-author-input,book-description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")
function createBook(book){

    var div = document.createElement("div")

    div.setAttribute("class","book-container")

    div.innerHTML = `
    <h2>${book.title}</h2>
    <h5>${book.author}</h5>
    <p>${book.description}</p>
    <button onclick="deletebook(event)">Delete</button>
    `

    container.append(div)
}



addbook.addEventListener("click",function(event){

    event.preventDefault()

    var book = {
        title: booktitleinput.value,
        author: bookauthorinput.value,
        description: bookdescriptioninput.value
    }

    createBook(book)

    var books = JSON.parse(localStorage.getItem("books")) || []

    books.push(book)

    localStorage.setItem("books",JSON.stringify(books))

    popupoverlay.style.display="none"
    popupbox.style.display="none"

    booktitleinput.value=""
    bookauthorinput.value=""
    bookdescriptioninput.value=""
})





function deletebook(event){

    var bookcontainer = event.target.parentElement

    var title = bookcontainer.querySelector("h2").textContent

    var books = JSON.parse(localStorage.getItem("books")) || []

    books = books.filter(function(book){
        return book.title !== title
    })

    localStorage.setItem("books",JSON.stringify(books))

    bookcontainer.remove()
}
window.onload = function(){

    var books = JSON.parse(localStorage.getItem("books")) || []

    books.forEach(function(book){
        createBook(book)
    })

}

