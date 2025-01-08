const body = document.getElementById('semua')
const button = document.getElementById('tombol');
let angkaAcak, kodeWarna;

button.addEventListener('click', () => {

    angkaAcak = Math.floor(Math.random() * 16777215)

    kodeWarna = "#" + angkaAcak
    .toString(16)


    document.body.style.backgroundColor = kodeWarna;

})

// function warnaAcak(){
//        let warna = Math.floor(Math.random
//         * 15)

//         let kodeWarna = "#" + warna.toString(16).padStart(5,"0")

//         document.body.style.backgroundColor = kodeWarna;
//         console.log(kodeWarna)
// }
// warnaAcak();