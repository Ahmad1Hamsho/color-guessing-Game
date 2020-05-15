function colorRandom() {
  return Math.round(Math.random() * 255);
}

function boxColor(box, r, g, b) {
  box.setAttribute(
    "style",
    "background-color: rgb(" + r + "," + g + "," + b + ");"
  );
}

var box = document.getElementsByClassName("box");

var rgb = document.getElementById("colorName");

var erg = document.getElementById("erg");

var rightBox = Math.round(Math.random() * (box.length - 1));

for (var i = 0; i < box.length; i++) {
  var r = colorRandom();
  var g = colorRandom();
  var b = colorRandom();

  boxColor(box[i], r, g, b);

  if (i === rightBox) {
    rgb.innerHTML = "rgb " + `(${r}, ${g}, ${b})` + " is?";
  }

  box[i].addEventListener("click", function () {
    if (this === box[rightBox]) {
      erg.innerHTML = "Das stimmt! Super🤩";
    } else {
      erg.innerHTML = "Das stimmt leider nicht 😔 Versuch es noch einmal 😒 ";
    }
  });
}
function refreshPage() {
  window.location.reload();
}
