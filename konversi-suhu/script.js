const masukan = document.getElementById('inpt')
const button = document.getElementById('btn')
const operasi = document.getElementById('opsi')
let jawaban

button.addEventListener('click', () => {
    const nilai = masukan.value 
    const angka = parseFloat(nilai);
    const operasi = opsi.value

    if (isNaN(angka)) {
        hasil.textContent = 'masukan angka yang valid'
        return
    }

    if (operasi === 'Farenhit') {
        jawaban = angka * 0.18 + 32
        }
        else if (operasi === 'Reamur') {
            jawaban = angka * 0.18
        }
        else if (operasi === 'Kelvin') {
            jawaban = angka + 273.15
        }else{
            jawaban = "operasi tidak valid"
        }
    hasil.textContent = `hasil conversi: ${jawaban}`
})