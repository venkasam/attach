class Sling{
    constructor(bodyA,pointB)
    
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            lenght:300
    
    
    
        }
    this.pointB=pointB
    this.sling=Matter.Constraint.create(options)
    World.add(world,this.sling)
    
    
    
    
    
    }
    fly(){
    this.sling.bodyA=null;
    
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
    var pointB=this.pointB
    var pointA=this.sling.bodyA.position
    
    
    strokeWeight(4)
    line (pointA.x,pointA.y,pointB.x,pointB.y)
    
        }
    
    
    }
    
    
    
    
}    