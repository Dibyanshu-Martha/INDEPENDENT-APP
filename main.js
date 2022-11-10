var x = 0;
function down() {
  console.log("down");
  x = 1;
}
function up() {
  console.log("up");
  x = 0;
}
var j;
var y;
var a;
var b;
function move(/*event*/) {
  var width = document.getElementById("num").value;
  j = event.clientX - document.getElementById("c").offsetLeft;
  y = event.clientY - document.getElementById("c").offsetTop;
  if (x == 1) {
    console.log("Coordinate x: " + j, "Coordinate y: " + y);
    let ctx = document.getElementById("c").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(j, y);
    ctx.strokeStyle = document.getElementById("col").value;
    ctx.fillStyle = document.getElementById("col").value;
    ctx.lineWidth = width;
    ctx.fillRect(j - width / 2, y - width / 2, width, width);
    ctx.stroke();
    ctx.closePath();
  }
  a = j;
  b = y;
}
