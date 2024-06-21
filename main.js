let userForm = document.querySelector(".form")
userH1 = document.querySelector(".salom")
let userColor = document.querySelector(".color")
let userHeight = document.querySelector(".height")
let userWeight = document.querySelector(".weight")
let userWord = document.querySelector(".word")
let userS = document.querySelector(".s")
userForm.addEventListener('input',(said) => {
    said.preventDefault()
    userS.style.backgroundColor = userColor.value;
    userS.style.height = userHeight.value + 'px';
    userS.style.width = userWeight.value + 'px';
    userH1 = userWord.value``

    value = "";
})