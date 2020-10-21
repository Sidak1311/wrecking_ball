class ball{
    constructor(x,y,radius){
        var options = {
            density:0.7,
            frictionAir:0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        push()
        fill("blue")
        stroke("purple")
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop()
    }
}