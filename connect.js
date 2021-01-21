class Connect{

    constructor(bodyA,bodyB){
     
        var options={

        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.01,
        length:5
        }
        this.connect=Constraint.create(options)
        World.add(world,this.connect)
    }

    display(){
    var pointA=this.connect.bodyA.position
    var pointB=this.connect.bodyB.position
    strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}}