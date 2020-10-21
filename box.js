//Making our class
class Box {
  //Making the constructor function
  constructor(x, y, width, height) {
    //Making our options to change the restitution etc
    var options = {
        'restitution':0.6,
        'friction':0.8,
        'density':0.5
    }
    //Creating our body its width and height
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    //Adding our body to the world
    World.add(world, this.body);
  }
  //Display function to display our objs
  display(){
    //Making our position and angle variables
    var pos =this.body.position;
    var angle = this.body.angle;
    //Changing the rect mode to center
    rectMode(CENTER);
    //Filling the color
    fill(255);
    //Pushing to save the origin
    push();
    //Changing the origin
    translate(pos.x,pos.y);
    //Rotating above the origin witht the specified angle
    rotate(angle);
    fill("red")
    strokeWeight(10)
    stroke("orange")
    rect(0,0, this.width, this.height);
    //Restoring the origin
    pop();
  }
};
