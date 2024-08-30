document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const submitButton = document.getElementById('submitButton');
    const messageDiv = document.getElementById('message');

    submitButton.addEventListener('click', () => {
        const inputText = textInput.value.trim();

        if (inputText === '') {
            messageDiv.textContent = 'Por favor, digite algo no campo de texto.';
        } else if (inputText.length < 5) {
            messageDiv.textContent = 'Digite pelo menos 5 caracteres.';
        } else {
            messageDiv.textContent = `Você digitou: ${inputText}`;
        }
    });
});