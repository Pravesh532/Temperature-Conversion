function convert() {
    let textbox = document.getElementById("textBox");
    let toFahrenheit = document.getElementById("toFahrenheit");
    let toCelsius = document.getElementById("toCelsius");
    let result = document.getElementById("result");
    let temp;

    if (toFahrenheit.checked) {
        temp = parseFloat(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " °F";
    } else if (toCelsius.checked) {
        temp = parseFloat(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + " °C";
    } else {
        result.textContent = "Please select a conversion option.";
    }
}