const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(new Vector2d(200, 300), 100);
let mouseVector = new Vector2d(0, 0);

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

//let a = new Vector2d(1, 2);
//let b = new Vector2d(3, 4);

//let c = new Vector2d(0, 0);
//c.differenceVector(a, b);

//console.log(c);
