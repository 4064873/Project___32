class Box7{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility=255;
      }
      display(){
        if(this.body.speed<3) {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(214,139,102);
        rect(0, 0, this.width, this.height);
        pop();
        } else {
          World.remove(world,this.body)
          push()
          this.Visibility = this.Visibility - 5
          tint(255,this.Visibility)
          pop()
        }
      }
      score(){
        if(this.Visiblity<0 && this.Visiblity>-500){
          score++;
        }
      }
}