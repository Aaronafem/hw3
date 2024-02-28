function toCelsius() {
  // grabs the input from the user
  let input = document.getElementById("temperature").value;
  if (!isNaN(input)) {
    // converts the temperature to C
    let celsius = ((input - 32) * 5) / 9;
    // show back to the user, on the <span> element
    document.getElementById("result").innerText = celsius;
    // makes the div visible
    // element.style can be used to change CSS properties of an HTML document
    document.getElementById("result-parent").style.visibility = "visible";
  } else {
    let warning = document.getElementById("result-parent");
    warning.innerText = "Please input a valid number!";
    warning.classList.add("warning");
  }
}
