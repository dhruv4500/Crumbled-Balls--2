class dustBinImage{
    constructor(x,y,width,height){
        var prop={
            restitution:0,
            isStatic:false,
            density:1,
            friction:1
        } 

        this.myObjects=Bodies.rectangle(x,y,width,height,prop);
        World.add(world,this.myObjects);

        this.height=height;
        this.width=width;
        this.image=loadImage("dustbingreen.png");
    }

    display(){

        var angle=this.myObjects.angle;
        var position=this.myObjects.position;

        push();
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("green");
        strokeWeight(1);
        fill("green");
       // rect(0,0,this.width,this.height);
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
        pop();

    }
}