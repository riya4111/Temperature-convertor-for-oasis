function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let convertedTemperature;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      convertedTemperature = (temperature * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      convertedTemperature = (temperature - 32) * 5/9;
    } else {
      convertedTemperature = temperature;
    }

    document.getElementById("result").innerText = `${temperature} ${fromUnit} is ${convertedTemperature.toFixed(2)} ${toUnit}`;
  }