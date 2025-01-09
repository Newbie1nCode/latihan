const tombol = document.getElementById('btn1')
const button = document.getElementById('btn2')
const muncul = document.getElementById('anime')
let angka = 0

tombol.addEventListener('click', () => {
muncul.textContent = angka--
})

button.addEventListener('click',() => {
    muncul.textContent = angka++
})
