/// <reference path="chicken.ts"/>

class Gun {
    
    private div: HTMLElement;
    private game:Game;
    private intervalId:number;
    
    public x:number;
    public y:number;

    constructor(chicken:Chicken, g:Game) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
                
        this.game = g;

        this.x = 20;
        this.y = 40;
        
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";

        this.fire();
    }

    public fire():void {
        // de globale positie van de gun kan je uitrekenen met getBoundingRect
        let rect:ClientRect = this.div.getBoundingClientRect();
        
        let bullet = new Bullet(rect.left + 20, rect.top + 40);

        // let op dat de bullet blijft bestaan als de kip+gun weg is!
        // Let op dat de bullet niet mee beweegt met de kip+gun!
        // daarom moet de bullet in de main game worden bijgehouden.

        this.game.addBullet(bullet);
    }

}