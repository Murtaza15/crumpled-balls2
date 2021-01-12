class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.radius=radius
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world, this.body);
        this.image=loadImage("paper.png");
    }
    display()
    {
        var paperpos=this.body.position;
         push();
          translate(paperpos.x, paperpos.y);
           rectMode(CENTER)
            //strokeWeight(4);
             fill(255,0,255)
              imageMode(CENTER);
               image(this.image, 0,0,this.radius, this.radius) //ellipse(0,0,this.r, this.r); 
               pop();

    }
}