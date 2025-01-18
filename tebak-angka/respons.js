const input = document.getElementById('inpt')
const button = document.getElementById('btn')
const output = document.getElementById('hasil')

button.addEventListener('click',() => {
    const angka = input.value;
    
    if (angka === '4') {
        alert('you win!');
        output.textContent = '';
    }else{
        output.textContent = 'salahh!'
    }

})