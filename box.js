class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity = 255;
      
      World.add(world, this.body);
    }

    score(){
        if(this.visibility<0 && this.visibility >-105){
          score++;
        }
      }
    display(){

       if (this.body.speed<3) {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
       } else {
           World.remove(world, this.body)
           push();
           this.visiblity = this.visiblity - 0.5;
           pop();
       }

    }
  }