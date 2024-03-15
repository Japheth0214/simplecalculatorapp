document.addEventListener('DOMContentLoaded', function () {
    const firstNumberInput = document.getElementById('firstNumber');
    const secondNumberInput = document.getElementById('secondNumber');
    const sumInput = document.getElementById('sum');
    const resetButton = document.getElementById('resetBtn');

    firstNumberInput.addEventListener('input', calculateSum);
    secondNumberInput.addEventListener('input', calculateSum);
    resetButton.addEventListener('click', resetInputs);

    function calculateSum() {
        const firstNumber = parseFloat(firstNumberInput.value);
        const secondNumber = parseFloat(secondNumberInput.value);
        const sum = firstNumber + secondNumber;
        sumInput.value = sum;
    }

    function resetInputs() {
        firstNumberInput.value = 0;
        secondNumberInput.value = 0;
        sumInput.value = 0;
    }
});
