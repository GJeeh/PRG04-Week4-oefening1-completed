/// <reference path="game.ts"/>

class Bullet {
    
    private div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number = 22;
    public height:number = 22;
    private xspeed:number;
    private yspeed:number;

    constructor(x:number, y:number) {
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
                
        this.x = x;
        this.y = y;

        this.xspeed = -1;
        this.yspeed = 1;

        this.move();
    }

    public move():void {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}