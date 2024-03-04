// Get references to DOM elements
const numberInput = document.getElementById("numInput");
const increaseBtn = document.getElementById("up");
const decreaseBtn = document.getElementById("down");

// Event listener for increase button
increaseBtn.addEventListener("click", () => {
  numberInput.value = parseInt(numberInput.value) + 1;
});

// Event listener for decrease button
decreaseBtn.addEventListener("click", () => {
  numberInput.value = parseInt(numberInput.value) - 1;
});

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

document.getElementById("btn1").addEventListener("click", function () {
  var unit1 = document.getElementById("mySelect").value;
  var unit2 = document.getElementById("mySelectTwo").value;
  var temperature = parseFloat(document.getElementById("numInput").value);

  var result;
  var formula;

  if (unit1 === "Celsius" && unit2 === "Fahrenheit") {
    result = roundNumber((temperature * 9) / 5 + 32);
    formula = temperature + "°C × 9/5 + 32 = " + result + "°F";
  } else if (unit1 === "Celsius" && unit2 === "Kelvin") {
    result = roundNumber(temperature + 273.15);
    formula = temperature + "°C + 273.15 = " + result + "K";
  } else if (unit1 === "Fahrenheit" && unit2 === "Celsius") {
    result = roundNumber(((temperature - 32) * 5) / 9);
    formula = "(" + temperature + "°F - 32) × 5/9 = " + result + "°C";
  } else if (unit1 === "Fahrenheit" && unit2 === "Kelvin") {
    result = roundNumber(((temperature - 32) * 5) / 9 + 273.15);
    formula = "(" + temperature + "°F - 32) × 5/9 + 273.15 = " + result + "K";
  } else if (unit1 === "Kelvin" && unit2 === "Celsius") {
    result = roundNumber(temperature - 273.15);
    formula = temperature + "K - 273.15 = " + result + "°C";
  } else if (unit1 === "Kelvin" && unit2 === "Fahrenheit") {
    result = roundNumber(((temperature - 273.15) * 9) / 5 + 32);
    formula = "(" + temperature + "K - 273.15) × 9/5 + 32 = " + result + "°F";
  }
  else {
    result = temperature; // If both units are the same, temperature remains unchanged
      formula = temperature + unit1 + " = " + temperature + unit2;
    //   result = roundNumber(((temperature - 32) * 5) / 9);
    //   formula = "(" + temperature + "°F - 32) × 5/9 = " + result + "°C";
  }

  document.getElementById("textInput").value = result;
  document.getElementById("textInput2").value = formula;
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("numInput").value = "";
  document.getElementById("textInput").value = "";
  document.getElementById("textInput2").value = "";
});



//swapping the values of select boxes
function swapOptions() {
  var selectBox1 = document.getElementById("mySelect");
  var selectBox2 = document.getElementById("mySelectTwo");
  var displaySpan1 = document.getElementById("displaySpan");
  var displaySpan2 = document.getElementById("displaySpanTwo");

  var tempValue = selectBox1.value;
  selectBox1.value = selectBox2.value;
  selectBox2.value = tempValue;

  var tempValue2 = displaySpan1.innerHTML;
  displaySpan1.innerHTML = displaySpan2.innerHTML;
  displaySpan2.innerHTML = tempValue2;
}


// Get the select elements and the span elements
var selectElement1 = document.getElementById("mySelect");
var selectElement2 = document.getElementById("mySelectTwo");
var displaySpan1 = document.getElementById("displaySpan");
var displaySpan2 = document.getElementById("displaySpanTwo");


// Add event listeners to the select elements
selectElement1.addEventListener("change", function() {
  validateAndDisplay(this.value, selectElement2.value);
});

selectElement2.addEventListener("change", function() {
  validateAndDisplay(selectElement1.value, this.value);
});

// Function to validate and display different words based on selected option
function validateAndDisplay(value1, value2) {
  // Check if both select elements have the same value
  if (selectElement1.value === selectElement2.value) {
    
    alert("Please select different option,both are same!");
            selectElement1.value = selectElement1.options[0].value; // Restore initial value
            selectElement2.value = selectElement2.options[1].value; // Restore initial value
       
    return 0; // Prevent further execution
  }

 // Enable all options in both select boxes
  enableOptions(selectElement1);
  enableOptions(selectElement2);

  // Disable the option with the same value in the other select box
  disableOption(selectElement1, value2);
  disableOption(selectElement2, value1);

  // Display different words in the span elements based on the selected options
  switch (value1) {
    case "Fahrenheit":
      displaySpan1.innerHTML = "&deg;F";
      break;
    case "Celsius":
      displaySpan1.innerHTML = "&deg;C";
      break;
    case "Kelvin":
      displaySpan1.innerHTML = "&deg;K";
      break;
    default:
      displaySpan1.innerHTML = ""; // Clear the span if no valid option selected
  }

  switch (value2) {
    case "Fahrenheit":
      displaySpan2.innerHTML = "&deg;F";
      break;
    case "Celsius":
      displaySpan2.innerHTML = "&deg;C";
      break;
    case "Kelvin":
      displaySpan2.innerHTML = "&deg;K";
      break;
    default:
      displaySpan2.innerHTML = ""; // Clear the span if no valid option selected
  }
}

// Function to enable all options in a select element
function enableOptions(selectElement) {
  var options = selectElement.options;
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = false;
  }
  return true;
}

// Function to disable a specific option in a select element
function disableOption(selectElement, value) {
  var options = selectElement.options;
  for (var i = 0; i < options.length; i++) {
    if (options[i].value === value) {
      options[i].disabled = true;
      break;
    }
  }
  return false;
}
