const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,gamestate;
var box1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    gamestate=1
   ball=new Ball(300,200,90)
   r=new R(600,300,100,70)
   d=new R(700,300,100,70)
   p=new R(800,300,100,70)
   o=new R(900,300,100,70)
   z=new R(600,240,100,70)
   x=new R(700,240,100,70)
   c=new R(800,240,100,70)
   v=new R(900,240,100,70)
   t=new Sling(ball.body,{x:300,y:200})
   gr=new GR(600,380,1200,40)
   
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    if (keyCode==32){
        r=new R(600,300,100,70)
        d=new R(700,300,100,70)
        p=new R(800,300,100,70)
        o=new R(900,300,100,70)
        z=new R(600,240,100,70)
        x=new R(700,240,100,70)
        c=new R(800,240,100,70)
        v=new R(900,240,100,70)
        
       }
    ball.display()
    t.display()
    r.display()
    d.display()
    p.display()
    o.display()
    z.display()
    x.display()
    c.display()
    v.display()
   gr.display()
    
   

}
function mouseReleased(){
    t=new Sling()
    gamestate=2
    }
function mouseDragged(){
  
    if(gamestate==1){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
   

}
function keyPressed() {
        if(keyCode === 32){
    chain.attach(ball.body);
        }
    }

