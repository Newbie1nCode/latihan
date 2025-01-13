const operasi = document.getElementById('opsi')
const hasil = document.getElementById('hasil')
let interval

operasi.addEventListener('change', () =>{
    if(interval) clearInterval (interval);

    let waktu = parseInt(operasi.value)
    hasil.textContent = waktu + "detik"

    interval = setInterval(() => {
        waktu--;
        if (waktu <= 0) {
            clearInterval(interval)
            hasil.textContent = "waktu habis!"
        }else{
            hasil.textContent = waktu + "detik"
        }
    },1000)
})