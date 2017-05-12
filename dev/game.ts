/// <reference path="tree.ts"/>

class Game {
    
    private trees:Array<Tree>;
    private bullets:Array<Bullet>;
 
    constructor() {
        this.trees = new Array<Tree>();
        this.bullets = new Array<Bullet>();

        this.trees.push(new Tree(-420, 180, this),new Tree(-420, 380, this),new Tree(-420, 680, this));
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        for(let t of this.trees){
            t.move();
        }

        for(let b of this.bullets){
            b.move();
        }
                
        requestAnimationFrame(() => this.gameLoop());
    }

    public addBullet(b:Bullet){
        this.bullets.push(b);
    }
} 

