/// <reference path="chicken.ts" />

class Tree {
    
    public div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    private speed:number;

    private chickens:Array<Chicken>;
    
    constructor(x:number, y:number, g:Game) {
        this.div = document.createElement("tree");
        document.body.appendChild(this.div);
        
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        
        this.chickens = new Array<Chicken>();
        this.chickens.push(new Chicken(20,-70, this, g),new Chicken(120,-70, this, g),new Chicken(200,-70, this, g));
    }
    
    
    
    public move():void {
        this.x += this.speed;
        
        if(this.x > window.innerWidth) this.resetChickens();

        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    private resetChickens():void{
        this.x = 0 - this.width;
        // hier weggeschoten kippen weer terug zetten
    }

}