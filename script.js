
var calculateButton = document.querySelector('#calculate-button');
var heightInput = document.querySelector('#height');
var weightInput = document.querySelector('#weight');
var resultParagraph = document.querySelector('#result');

calculateButton.addEventListener('click', function() {
  var height = heightInput.value;
  var weight = weightInput.value;
  var bmi = weight / (height * height);
  
  if (bmi < 18.5) {
    resultParagraph.innerHTML = "Seu IMC é " + bmi.toFixed(2) + ", você está abaixo do peso.";
  } else if (bmi < 25) {
    resultParagraph.innerHTML = "Seu IMC é " + bmi.toFixed(2) + ", você está com o peso normal.";
  } else if (bmi < 30) {
    resultParagraph.innerHTML = "Seu IMC é " + bmi.toFixed(2) + ", você está com sobrepeso.";
  } else {
    resultParagraph.innerHTML = "Seu IMC é " + bmi.toFixed(2) + ", você está obeso.";
  }
});
