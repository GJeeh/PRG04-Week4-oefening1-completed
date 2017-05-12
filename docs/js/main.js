var Chicken = (function () {
    function Chicken(x, y, tree, g) {
        var _this = this;
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);
        this.game = g;
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this.div.addEventListener("click", function (e) { return _this.onClick(e); });
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    Chicken.prototype.onClick = function (e) {
        if (!this.gun) {
            this.gun = new Gun(this, this.game);
        }
        else {
            this.gun.fire();
        }
    };
    return Chicken;
}());
var Tree = (function () {
    function Tree(x, y, g) {
        this.div = document.createElement("tree");
        document.body.appendChild(this.div);
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        this.chickens = new Array();
        this.chickens.push(new Chicken(20, -70, this, g), new Chicken(120, -70, this, g), new Chicken(200, -70, this, g));
    }
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.resetChickens();
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Tree.prototype.resetChickens = function () {
        this.x = 0 - this.width;
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.trees = new Array();
        this.bullets = new Array();
        this.trees.push(new Tree(-420, 180, this), new Tree(-420, 380, this), new Tree(-420, 680, this));
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.trees; _i < _a.length; _i++) {
            var t = _a[_i];
            t.move();
        }
        for (var _b = 0, _c = this.bullets; _b < _c.length; _b++) {
            var b = _c[_b];
            b.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.addBullet = function (b) {
        this.bullets.push(b);
    };
    return Game;
}());
var Bullet = (function () {
    function Bullet(x, y) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Gun = (function () {
    function Gun(chicken, g) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.game = g;
        this.x = 20;
        this.y = 40;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        var bullet = new Bullet(rect.left + 20, rect.top + 40);
        this.game.addBullet(bullet);
    };
    return Gun;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map