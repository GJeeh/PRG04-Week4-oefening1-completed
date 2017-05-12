/// <reference path="tree.ts"/>

class Chicken {
        
    private gun:Gun;
    private game:Game;

    public div: HTMLElement;
    public x:number;
    public y:number;
    public width:number;
    public height:number;

    constructor(x:number, y:number, tree:Tree, g:Game) {
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);

        this.game = g;
                
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));

        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    private onClick(e:MouseEvent):void {
        // als er nog geen gun is, dan aanmaken
        if(!this.gun){
            this.gun = new Gun(this, this.game);
        } else {
            this.gun.fire();
        }

        // optioneel: listener weghalen
    }

}