class Stone{

    constructor(x,y,width,height){
    
    var options  = {
    
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
    
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height)
    World.add(world,this.body);    
    }
    
    display(){
    
    var stonepos = this.body.position;

    push();
    translate(stonepos.x,stonepos.y)
    
    fill("red");
    stroke("black");
    rect(0,0,this.width,this.height)
    pop();
    }
    
    
    
    
    
    
    
    
    
    
    
    
    }