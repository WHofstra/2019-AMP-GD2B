class Point {

    constructor(position, radius, color1, color2, number){
      this.position = position;
      this.radius = radius;
      this.color1 = color1;
      this.color2 = color2;
      this.number = number;
    }

    draw(context){
      var grd = context.createRadialGradient(this.position.dx, this.position.dy, this.radius,
         this.position.dx - Math.floor(this.radius*0.8), this.position.dy - Math.floor(this.radius*0.8),
         Math.floor(this.radius/2));

      grd.addColorStop(0, this.color1);
      grd.addColorStop(1, this.color2);
      //grd.addColorStop(0, "rgb(255, 166, 0)");
      //grd.addColorStop(1, "rgb(166, 255, 0)");

      context.beginPath();
      //context.lineWidth = "5";
      context.strokeStyle = "rgb(75, 0, 255)";
      context.fillStyle = grd;
      //context.fillStyle = "rgba(255, 166, 0, 0.8)";
      context.arc(this.position.dx, this.position.dy, this.radius,
        0, 2 * Math.PI);
      context.stroke();
      context.fill();
      context.fillStyle = "rgb(0, 0, 0)";
      context.font = "30px Calibri Light";
      context.fillText(this.number, this.position.dx, this.position.dy + 30);
      context.strokeText(this.number, this.position.dx, this.position.dy + 30);
      context.closePath();
    }
}
