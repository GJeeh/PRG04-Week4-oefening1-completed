# Een kip op een vlot

## Opdracht 1

- Maak meerdere vloten aan in game.ts
- Plaats op elk vlot een random aantal kippen
- Het HTML element van de kip append je aan het HTML element van het vlot
- De kippen komen op de x as netjes naast elkaar te staan
- Game roept de update functie van de vloten aan. 
- Een vlot roept de update functie van zijn kippen aan.

## Opdracht 2

- We gaan de kip bewapenen. Geef de kip een `click` event listener.
- Bij een muisklik krijgt de kip een gun: `this.gun = new Gun();`
- De gun heeft een `public fire(){}` functie.
- Als je op de kip klikt terwijl hij al een gun heeft, dan roep je de `fire()` functie van de gun aan. Gebruik console.log om te zien of alles werkt.

## Opdracht 3

Omdat de bullet moet blijven bestaan als de kip en de gun weg zijn, kan de bullet geen child zijn van de gun. Het is ook niet mooi als de bullet mee beweegt met de gun. Daarom voegen we de bullet toe aan de game, op hetzelfde niveau als de rafts. 

- De `fire()` functie van de gun maakt een nieuwe bullet aan: `let b:Bullet = new Bullet(x,y);`
- De bullet moet de x en y positie van de kip op het vlot weten, om op de goede plek gezet te worden. Zie voorbeeldcode!
- Game.ts krijgt een array voor de bullets.
- Game.ts roept de `move` functie van de bullets aan.
- Game.ts heeft een `addBullet()` functie waarmee je kogels aan de game kan toevoegen. 
- De `fire()` functie van de gun voegt de bullet toe aan game met `this.game.addBullet();`

### Voorbeeldcode

#### Verwijzingen doorgeven

Via de constructor kan je een verwijzing naar de game doorgeven aan zijn children. Dit is handig als een child een functie van de game moet kunnen aanroepen. In dit voorbeeld zie je hoe de Chicken de gameOver functie van Game kan aanroepen:
```
class Game {
    constructor(){
        let raft = new Raft(this);
    }
    public gameOver(){
        console.log("game over man!");
    }
}
class Raft {
    private game:Game;
    constructor(g:Game){
        this.game = g;
        let chicken = new Chicken(this.game);
    }
}
class Chicken {
    private game:Game;
    constructor(g:Game){
        this.game = g;
        this.game.gameOver();
    }
}
```

#### Click Listener
```
this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
```

#### Check of een object al bestaat
```
this.gun = new Gun();

if(this.gun){
    console.log("De kip heeft al een gun!");
}
```

#### De absolute positie van een DOM element

Als je van het gun element de x en y positie opvraagt, dan krijg je de relatieve positie ten opzichte van de kip. Als je wil weten waar de gun staat ten opzichte van het browservenster, dan kan je werken met [getBoundingClientRect()](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect).

```
// de globale positie van de gun opvragen
let rect:ClientRect = this.div.getBoundingClientRect();

// de positie van de gun aan de bullet geven 
let bullet = new Bullet(rect.left, rect.top);
```

### Theme Song

[Chicken on a raft](http://chickenonaraft.com)