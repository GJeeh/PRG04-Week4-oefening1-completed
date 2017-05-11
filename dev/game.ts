/// <reference path="tree.ts"/>

class Game {
    
    private trees:Array<Tree>;
 
    constructor() {
        this.trees = new Array<Tree>();
        this.trees.push(new Tree());
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        for(let t of this.trees){
            t.update();
        }
                
        requestAnimationFrame(() => this.gameLoop());
    }
} 

