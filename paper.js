class Paper{
    constructor(x,y,rad){
        var options = {
            isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
        }
        this.body = Bodies.circle(x,y,rad,options);
        this.r = rad;
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipse(pos.x,pos.y,this.r,this.r);
        push();
        translate(pos.x,pos.y);
        strokeWeight(3);
        stroke('#fb0229');
        fill('#f82706');
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
