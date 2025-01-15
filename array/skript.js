const kata = [ 
    "Bermimpi besar, mulai dari kecil.", 
    "Jadilah energi yang ingin kamu tarik.",  
    "Sukses adalah perjalanan, bukan tujuan.",  
    "Tetap rendah hati, bekerja keras.",
    "Energi positif menarik orang positif.",
    "Teruslah berjalan, kamu lebih dekat dari yang kamu pikir.",  
    "Lakukan sekarang, nanti seringkali menjadi tidak pernah.",
    "Kebahagiaan dimulai dari rumah." ,
    "Fokus pada kemajuan, bukan kesempurnaan.",  
    "Langkah kecil membawa perubahan besar."  
]

const button = document.getElementById('btn')
const hasil = document.getElementById('output')

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * kata.length)
    hasil.textContent = kata[randomIndex]
})
