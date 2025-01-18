document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const outputText = caesarCipher(inputText, shift);
    document.getElementById('outputText').value = outputText;
});

function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = char >= 'a' ? 97 : 65;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        } else if (char.match(/[0-9]/)) {
            const num = parseInt(char);
            return ((num + shift) % 10).toString();
        }
        return char;
    }).join('');
}
