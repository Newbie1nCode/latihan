const masuk = document.getElementById('inpt1')
const masukan = document.getElementById('inpt2')
const opsi = document.getElementById('operation')
const button = document.getElementById('btn')
let jawaban;
button.addEventListener('click', () => {
    const angka1 = masuk.value.trim()
    const angka2 = masuk.value.trim()
    const operasi = opsi.value  
    
    if (angka1 === '' && angka2 === '') {
        jawaban = 'masukan angka cuk!'
        Hasil.textContent = jawaban
        return;
    }
    
    
    const nilai1 = parseFloat(angka1)
    const nilai2 = parseFloat(angka2)
    if (operasi === 'Tambah') {
        jawaban = nilai1 + nilai2
    }
    else if (operasi === 'Kali') {
        jawaban = nilai1 * nilai2
    }else if (operasi === 'Bagi'){
        jawaban = nilai1 / nilai2
    }
    else{
        jawaban = "operasi tidak valid"
    }
    Hasil.textContent = `Jawaban: ${jawaban}`

})

