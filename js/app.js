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


const numberInput2 = document.querySelector("#textInput");
const textArea = document.querySelector("#textInput2");
const convertBtn = document.querySelector("#btn1");
const resetBtn = document.querySelector("#btn2");
const swapBtn = document.querySelector("#btn3");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}



convertBtn.addEventListener("click", () => {

  let val1 = numberInput.value;
  let Temp = parseFloat(val1);
  let result; 

  if (selectElement2.value === "Celsius") {
 
    if ((selectElement1.value === "Fahrenheit") && (selectElement2.value === "Celsius")) {
    result = roundNumber((Temp - 32) * (5 / 9));
    setTextarea(result, Temp);
  }
}

  else if (selectElement2.value === "Kelvin") {

     convertBtn.addEventListener("click", () => {
      if ((selectElement1.value === "Fahrenheit") && (selectElement2.value === "Kelvin")) {
        result = roundNumber((Temp - 32) * (5 / 9) + 273.15);
         setTextarea2(result, Temp);
       }
     })
  }
  // convertTemperature();

}) 

    // //c to F
    // if (selectElement2.value === "Fahrenheit") {
    //   selectElement1.addEventListener("change", () => {
    //     if (selectElement1.value === "Celsius") {
    //       convertBtn.addEventListener("click", () => {
    //         let val1 = numberInput.value;
    //         let fromUnit = selectElement1.value;
    //         let toUnit = selectElement2.value;
    //         let cTemp = parseFloat(val1);
    //         let result;

    //         if ((fromUnit = "Celsius") && (toUnit = "Fahrenheit")) {
    //           //  let kTemp = (fTemp - 32) * (5 / 9) + 273.15;
    //           //  result = roundNumber(kTemp);
    //           result = roundNumber(cTemp * (9 / 5) + 32);
    //           // result2 = roundNumber((result + 273.15));
    //           setTextarea3(result, cTemp);
    //           // textArea.textContent = "(" + fTemp + " - 32) * (5 / 9) + 273.15 = " + result;
    //         }
    //       })
    //     }
    //   })
// }
    
// //c to k
//   else if(selectElement1.value==="Celsius") {
//     convertBtn.addEventListener("click", () => {
//        let val1 = numberInput.value;
//       //  let fromUnit = selectElement1.value;
//       //  let toUnit = selectElement2.value;
//        let cTemp = parseFloat(val1);
//        let result;

//        if ((selectElement1.value = "Celsius") && (selectElement2.value = "Kelvin")) {
//          //  let kTemp = (fTemp - 32) * (5 / 9) + 273.15;
//          //  result = roundNumber(kTemp);
//          result = roundNumber(cTemp + 273.15);
//          // result2 = roundNumber((result + 273.15));
//          setTextarea4(result, cTemp);
//          // textArea.textContent = "(" + fTemp + " - 32) * (5 / 9) + 273.15 = " + result;
//        }
//     })
//   }

  
 

selectElement2.addEventListener("change", () => {



  if (selectElement2.value === "Kelvin") {
    if ((selectElement1.value = "Fahrenheit")) {
      convertBtn.addEventListener("click", () => {
        let val1 = numberInput.value;
        // let fromUnit = selectElement1.value;
        // let toUnit = selectElement2.value;
        let fTemp = parseFloat(val1);
        let result;

        // if ((fromUnit = "Fahrenheit") && (toUnit = "Kelvin")) {
          result = roundNumber((fTemp - 32) * (5 / 9) + 273.15);
          setTextarea2(result, fTemp);
        // }
        
      })
    }
    
    selectElement1.addEventListener("change", () => {
      if (selectElement1.value === "Celsius") {
        convertBtn.addEventListener("click", () => {
          let val1 = numberInput.value;
          // let fromUnit = selectElement1.value;
          // let toUnit = selectElement2.value;
          let cTemp = parseFloat(val1);
          let result;

          // if ((fromUnit = "Celsius") && (toUnit = "Fahrenheit")) {
           
            result = roundNumber(cTemp * (9 / 5) + 32);
            setTextarea3(result, cTemp);
            
          // }
        })
        // if (selectElement2.value === "Kelvin") {
        //   convertBtn.addEventListener("click", () => {
        //     let val1 = numberInput.value;
        //     let fromUnit = selectElement1.value;
        //     let toUnit = selectElement2.value;
        //     let cTemp = parseFloat(val1);
        //     let result;
        //     if ((fromUnit = "Celsius") && (toUnit = "Kelvin")) {
        //       result = roundNumber(cTemp + 273.15);
        //        setTextarea4(result, cTemp);
        //      }
        //   })
          
        // }
     }
  })
}
    
  else if (selectElement2.value === "Celsius") {
    convertBtn.addEventListener("click", () => {
      let val1 = numberInput.value;
      // let fromUnit = selectElement1.value;
      // let toUnit = selectElement2.value;
      let fTemp = parseFloat(val1);
      let result;

      // if ((fromUnit = "Fahrenheit") && (toUnit = "Celsius")) {
        result = roundNumber((fTemp - 32) * (5 / 9));
        setTextarea(result, fTemp);
        
      // }
    });
  }
  

})

selectElement1.addEventListener("change", () => { 
  
    if (selectElement1.value === "Kelvin") {
      convertBtn.addEventListener("click", () => {
        let val1 = numberInput.value;
        // let fromUnit = selectElement1.value;
        // let toUnit = selectElement2.value;
        let kTemp = parseFloat(val1);
        let result;

        // if ((fromUnit = "Kelvin") && (toUnit = "Celsius")) {
         
          result = roundNumber(kTemp - 273.15);
          setTextarea5(result, kTemp);
          
        // }
      })

      selectElement2.addEventListener("change", () => {
        if (selectElement2.value === "Fahrenheit") {
        convertBtn.addEventListener("click", () => {
            let val1 = numberInput.value;
            let fromUnit = selectElement1.value;
            let toUnit = selectElement2.value;
            let kTemp = parseFloat(val1);
            let result;

            if ((fromUnit = "Kelvin") && (toUnit = "Fahrenheit")) {
              result = roundNumber((kTemp - 273.15) * (9 / 5) + 32);
              setTextarea6(result, kTemp);
            }
        })
      }
        else if (selectElement2.value === "Celsius") {
          convertBtn.addEventListener("click", () => { 
            let val1 = numberInput.value;
            // let fromUnit = selectElement1.value;
            // let toUnit = selectElement2.value;
            let kTemp = parseFloat(val1);
            let result;

            // if ((fromUnit = "Kelvin") && (toUnit = "Celsius")) {
             
              result = roundNumber(kTemp - 273.15);
              setTextarea5(result, kTemp);
              
            // }
          })
        }
         
      })
  }
  
    else if (selectElement1.value === "Fahrenheit") {
      convertBtn.addEventListener("click", () => {
        
        let val1 = numberInput.value;
        // let fromUnit = selectElement1.value;
        // let toUnit = selectElement2.value;
        let fTemp = parseFloat(val1);
        let result;

   
        // if ((fromUnit = "Fahrenheit") && (toUnit = "Celsius")) {
          result = roundNumber((fTemp - 32) * (5 / 9));
          setTextarea(result, fTemp);
        // }

      })
  }

  //   else if (selectElement1.value === "Celsius") {
      
  //     selectElement2.addEventListener("change", () => {
  //       if (selectElement2 === "Kelvin") {
  //         convertBtn.addEventListener("click", () => {
  //           let val1 = numberInput.value;
  //           let fromUnit = selectElement1.value;
  //           let toUnit = selectElement2.value;
  //           let cTemp = parseFloat(val1);
  //           let result;
  //           if ((fromUnit === "Celsius") && (toUnit === "Kelvin")) {
  //             result = roundNumber(cTemp + 273.15);
  //              setTextarea4(result, cTemp);
  //            }
  //         })
  //       }
  //     })
  // }

})


function setTextarea(text,num) {
  document.getElementById("textInput").value = text;
  textArea.textContent = "(" + num + " - 32) * (5 / 9) = " + text;
}

function setTextarea2(text, num) {
  document.getElementById("textInput").value = text;
  textArea.textContent = "(" + num + " - 32) * (5 / 9) + 273.15 = " + text;
}

//C to F
function setTextarea3(text, num) {
  document.getElementById("textInput").value = text;
  textArea.textContent = "(" + num + " * (9 / 5)) + 32 = " + text;
}

//C to K
function setTextarea4(text, num) {
  document.getElementById("textInput").value = text;
  textArea.textContent = ""+ num +" + "+ "273.15 = " + text;
}

function setTextarea5(text, num) {
  document.getElementById("textInput").value = text;
  textArea.textContent = "" + num + " - " + "273.15 = " + text;
}

function setTextarea6(text, num) {
  document.getElementById("textInput").value = text;
  textArea.textContent = "("+ num + " - 273.15) * (9 / 5) + 32 = "+ text;
}
// cTemp + 273.15;




function convertTemperature() {
  var val = document.getElementById("numInput").value;
  var temperature = parseFloat(val);
  var result;
  if (selectElement1.value === selectElement2.value) {
    result = temperature;
  } else if (selectElement1.value === "celsius" && selectElement2.value === "fahrenheit") {
    result = roundNumber((temperature * 9) / 5 + 32);
    setTextarea3(result, temperature);
  } else if (selectElement1.value === "celsius" && selectElement2.value === "kelvin") {
    result = roundNumber(temperature + 273.15);
    setTextarea4(result, temperature);
  } else if (selectElement1.value === "fahrenheit" && selectElement2.value === "celsius") {
    result = roundNumber(((temperature - 32) * 5) / 9);
    setTextarea(result, temperature);
  } else if (selectElement1.value === "fahrenheit" && selectElement2.value === "kelvin") {
    result = roundNumber(((temperature - 32) * 5) / 9 + 273.15);
    setTextarea2(result, temperature);
  } else if (selectElement1.value === "kelvin" && selectElement2.value === "celsius") {
    result = roundNumber(temperature - 273.15);
    setTextarea5(result, temperature);
  } else if (selectElement1.value === "kelvin" && selectElement2.value === "fahrenheit") {
    result = roundNumber(((temperature - 273.15) * 9) / 5 + 32);
    setTextarea6(result, temperature);
  }
}


function resetFields() {
  
    numberInput.value = "0";
    numberInput2.value = "";
    textArea.textContent = "";
}
  
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



