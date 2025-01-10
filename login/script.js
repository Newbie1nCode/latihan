const button = document.getElementById('btn')
const username = document.getElementById('nama')

button.addEventListener('click', () => {
    const nama = username.value
    
    let angka = Math.floor(Math.random() * 16777215)
    
    let ubahWarna = "#" + angka.toString(16)
    
    alert(`Selamat datang ${nama}`)
    document.body.style.backgroundColor = ubahWarna
})
