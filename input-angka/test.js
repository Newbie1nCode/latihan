const masukan = document.getElementById('cihuy')
const button = document.getElementById('btn')
let interval
let waktu
button.addEventListener('click',() => {
    if(interval) clearInterval(interval)

    waktu = parseInt(masukan.value)
    output.textContent = waktu + "detik"

    interval = setInterval(() => {
        waktu--
        if(waktu <= 0) {
            clearInterval(interval)
            output.textContent = "waktu habis"
        } else {
            output.textContent = waktu + "detik"
        }
    },1000)
})