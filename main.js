document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bmiForm').addEventListener('submit', function(event) {
        event.preventDefault();
        calculateBMI();
    });
});

function calculateBMI() {
    var name = document.getElementById('name').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    var bmi = weight / (height * height);
    document.getElementById('your_name').textContent = name + ", ";
    document.getElementById('bmiOutput').textContent = bmi.toFixed(2);

    var status = '';
    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        status = 'a healthy weight';
    } else if (bmi >= 25 && bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    }
    document.getElementById('bmiStatus').textContent = status;
}

