document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    if (!input.trim()) {
        alert('Please input a value');
        return;
    }

    const original = input;
    const cleaned = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');

    if (cleaned === reversed) {
        resultDiv.textContent = `${original} is a palindrome`;
    } else {
        resultDiv.textContent = `${original} is not a palindrome`;
    }
});

