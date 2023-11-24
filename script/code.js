let color = document.getElementById('rgbColor');
color.addEventListener('input', function () {
  convertRgbToHex();
});
function convertRgbToHex() {
  let red = parseInt(document.getElementById('red').value) || 0;
  let green = parseInt(document.getElementById('green').value) || 0;
  let blue = parseInt(document.getElementById('blue').value) || 0;
  
  red = Math.min(255, Math.max(0, red));
  green = Math.min(255, Math.max(0, green));
  blue = Math.min(255, Math.max(0, blue));
  
  let hexValue =
    '#' + componentToHex(red) + componentToHex(green) + componentToHex(blue);
  document.getElementById('hexElement').innerHTML = 'Hex Color: ' + hexValue;
}
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}
