class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.bottombody = Bodies.rectangle(x,y,width,height,options);
        this.leftWallbody = Bodies.rectangle(x-50, y-45,height,width,options);
        this.rightWallbody = Bodies.rectangle(x+50, y-45,height,width,options);
        this.wd = width;
        this.ht = height;
        World.add(myWorld,[this.bottombody,this.leftWallbody,this.rightWallbody]);
    }
    display(){
        var bottompos = this.bottombody.position;
        var leftWallpos = this.leftWallbody.position;
        var rightWallpos = this.rightWallbody.position;
        rectMode(CENTER);
        stroke('#0fd927');
        fill('#0fd927');
        rect(bottompos.x,bottompos.y,this.wd,this.ht);
        rect(leftWallpos.x,leftWallpos.y,this.ht,this.wd);
        rect(rightWallpos.x,rightWallpos.y,this.ht,this.wd);
    }
}