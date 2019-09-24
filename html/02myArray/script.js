const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

const max_dots = 10;

canvas.width = width;
canvas.height = height;

let dots = [];
var clicked = [];
var frames = 1;

let point = new Point(new Vector2d(getRandom(width), getRandom(height)),
 30, getRandomColor(), getRandomColor(), frames);
let mouseVector = new Vector2d(0, 0);
let difference = new Vector2d(0, 0);

function refresh(){
  context.clearRect(0, 0, width, height);

  for (let i = 0; i < max_dots; i++){
    clicked[i] = 0;
  }

  while (frames <= max_dots){
    let point = new Point(new Vector2d(getRandom(width), getRandom(height)),
     30, getRandomColor(), getRandomColor(), frames);
    //point.draw(context);
    dots.push(point);
    frames++;
  }

  for (let i = 0; i < dots.length; i++){
    dots[i].draw(context);
  }
}

refresh();

window.addEventListener('click', (evt)=>{
  //console.console.log(evt.clientX, evt.clientY);

  for (let i = 0; i < dots.length; i++){
    mouseVector.dx = evt.clientX;
    mouseVector.dy = evt.clientY;
    //console.log(mouseVector);
    //console.log(dots[i].position);
    difference.differenceVector(dots[i].position, mouseVector);
    //console.log(difference);
    //console.log(difference.magnitude);

    if(difference.magnitude <= dots[i].radius){
      dots[i].color1 = "rgb(0, 80, 255)";
      dots[i].color2 = "rgb(150, 200, 255)";
      //point.draw(context);
      dots[i].draw(context);
      clicked[i] = 1;
      newSet();
    }
  }
})

function newSet(){

  for (let i = 0; i < dots.length && clicked[i] == 1; i++){
    console.log("Ball " + i + " clicked!");

    if (i == dots.length - 1){
      frames = 1;
      refresh();
    }
  }
}

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
