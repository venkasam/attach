class GR{
    constructor(x,y,width,height){
        var options={
     "restitution":1.0,
     "density":1.0,
     "isStatic":true




        }

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
this.x=x 
this.y=y 
World.add(world,this.body)


    }

display(){
   

push()
fill("blue")

translate(this.body.position.x,this.body.position.y)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()







}






}