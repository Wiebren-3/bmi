function calculateBMI() {
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
      alert('Vul alle velden in met geldige cijfers.');
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
  
    let result = '';
  
    if (bmi < 18.5) {
      result = 'Veel te laag';
    } else if (bmi < 24.9) {
      result = 'Goed';
    } else if (bmi < 29.9) {
      result = 'Hoog';
    } else {
      result = 'Veel te hoog';
    }
  
    document.getElementById('result').innerText = `Je BMI is ${bmi.toFixed(2)}. Resultaat: ${result}`;
  }
  