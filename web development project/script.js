function calculateBMI() {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);

  let bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  document.getElementById("result").innerText =
    "BMI: " + bmi.toFixed(2) + " (" + category + ")";
}