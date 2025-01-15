const operasi = document.getElementById('opsi')
const output = document.getElementById('hasil')
let interval
operasi.addEventListener('change', () => {
    if(interval) clearInterval (interval)


    let waktu = parseFloat(operasi.value)
    output.textContent = waktu +  "detik"

    interval = setInterval (() => {
        waktu--

        if (waktu <= 0) {
            clearInterval(interval)
            output.textContent = waktu + "udah abis cuk" 
        } else {
            output.textContent = waktu + "detik"
        }
    },1000)

})