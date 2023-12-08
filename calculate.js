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
    let interpretation = '';
  
    if (bmi < 18.5) {
        result = 'Veel te laag';
        interpretation = 'Je BMI wijst op ondergewicht. Het is belangrijk om voldoende voedingsstoffen binnen te krijgen en mogelijk een arts of voedingsdeskundige te raadplegen.';
    } else if (bmi < 24.9) {
        result = 'Goed';
        interpretation = 'Je BMI is in het gezonde bereik. Blijf actief en eet een evenwichtige voeding voor een gezonde levensstijl.';
    } else if (bmi < 29.9) {
        result = 'Hoog';
        interpretation = 'Je BMI wijst op overgewicht. Overweeg gezonde eetgewoonten en regelmatige lichaamsbeweging om je gezondheid te verbeteren.';
    } else {
        result = 'Veel te hoog';
        interpretation = 'Je BMI geeft aan dat je obesitas hebt. Raadpleeg een gezondheidsprofessional voor advies over gewichtsbeheersing en een gezonde levensstijl.';
    }
  
    const bmiResult = `Je BMI is ${bmi.toFixed(2)}. Resultaat: ${result}. ${interpretation}`;
    document.getElementById('result').innerText = bmiResult;
}
