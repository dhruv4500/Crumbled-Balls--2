class Ground{
    constructor(x,y,width,height){
        var prop={
            restitution:0,
            isStatic:true,
            density:0.3,
            friction:0.5 
        }

        this.myObjects=Bodies.rectangle(x,y,width,height,prop);
        World.add(world,this.myObjects);

        this.height=height;
        this.width=width;
    }

    display(){

        var angle=this.myObjects.angle;
        var position=this.myObjects.position;

        push();
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("brown");
        strokeWeight(1);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();

    }
}