const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

var frames = 1;

let point = new Point(new Vector2d(getRandom(width), getRandom(height)),
 30, getRandomColor(), getRandomColor(), frames);
let mouseVector = new Vector2d(0, 0);
let difference = new Vector2d(0, 0);

point.draw(context);

window.addEventListener('click', (evt)=>{
  //console.console.log(evt.clientX, evt.clientY);
  mouseVector.dx = evt.clienX;
  mouseVector.dy = evt.clienY;
  console.log(mouseVector);
  console.log(point.position);
  difference.differenceVector(point.position, mouseVector);
  console.log(difference);
  console.log(difference.magnitude);

  if(difference.magnitude <= point.radius){
    point.position.dx += (Math.random() * (width - point.dx));
    point.position.dy += (Math.random() * (height - point.dy));
    point.draw(context);
  }
})

function getRandom(max){
  return Math.floor(Math.random()*max);
}

function getRandomMin(min, max){
  return Math.floor(Math.random()*(max - min) + min);
}

function getRandomColor()
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        //Choose a random number and convert it to hexadecimal
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}
