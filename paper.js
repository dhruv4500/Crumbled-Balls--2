class Paper{
    constructor(x,y,width,height){
        var prop={
            restitution:0.3,
            isStatic:false,
            density:1.2,
            friction:0.5
        }  

        this.myObjects=Bodies.rectangle(x,y,width-40,height-40,prop);
        World.add(world,this.myObjects);

        this.image=loadImage("paper.png");

        this.width=width;
        this.height=height;
        this.X=x;
        this.Y=y;
    }

    display(){

        var angle=this.myObjects.angle;
        var position=this.myObjects.position;

        push();
        translate(position.x,position.y);
        rotate(angle);
      //  ellipseMode(CENTER);
        stroke("white");
        strokeWeight(1);
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        //ellipse(0,0,this.width,this.height);
        pop();

    }
}