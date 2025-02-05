// hue slider functionality & storage
colorSlider = document.getElementById("col");
colorSlider.addEventListener('input', () => {
  document.documentElement.style.setProperty('--hue', colorSlider.value);
  window.sessionStorage.setItem("color", colorSlider.value);
})

//storage loader
storedColor = sessionStorage.getItem("color");
window.addEventListener("load", () => {
  if (storedColor !== null) {
    document.documentElement.style.setProperty('--hue', storedColor);
    colorSlider.value = storedColor;
  }else{
    document.documentElement.style.setProperty('--hue', 158);
    colorSlider.value = 158;
  }
});


//reset to default color when clicking icon
reset = document.getElementById("colorReset");
reset.addEventListener("click", () => {
  document.documentElement.style.setProperty('--hue', 158);
  window.sessionStorage.setItem("color", 158);
  colorSlider.value = 158;
})