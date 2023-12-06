// LUMINENCE CALCULATOR

//button click event/listener
document.getElementById("btn-lum").addEventListener("click", lumClicked);

function lumClicked() {
  console.log("hi");

  //INPUT
  let r = +document.getElementById("r-in").value;
  let g = +document.getElementById("g-in").value;
  let b = +document.getElementById("b-in").value;

  //proccess
  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  //this process allows BRIGHTNESS to EQUAL to the SQUARE ROOT of 0.299 X (R) TO THE POWER OF 2 +
  //0.587 X (G) TO THE POWER OF 2 +
  //0.114 X (b) TO THE POWER OF 2

  //output
  document.getElementById("output").innerHTML = brightness;
}
