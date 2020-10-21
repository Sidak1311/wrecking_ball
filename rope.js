class suspender{
    constructor(point,body,LENGTH){
        var options = {
            pointA:point,
            bodyB:body,
            stiffness:0.4,
            length:LENGTH
        }

        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        push()
        strokeWeight(3)
        stroke("yellow")
        fill("green")
        line(this.rope.pointA.x,this.rope.pointA.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
        pop()
    }
}