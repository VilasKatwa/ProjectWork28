class Ground {
    constructor(x,y,width,height,angle) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.angle = angle;
      World.add(world, this.body);
    }


    display(c){
      var pos =this.body.position;
      var angle = this.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      noStroke();
      if (c){
        fill(c);
      } else {
        noFill()
      }
      
      //rect(pos.x, pos.y, this.width, this.height);
      rect(0, 0, this.width, this.height);
      pop();

    }
  };