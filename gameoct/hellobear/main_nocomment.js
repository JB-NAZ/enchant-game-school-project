enchant();

window.onload = function(){
    var game = new Core(320, 320);
    game.fps = 15;
    game.preload("chara1.png", "../images1/map0.png");
    game.onload = function(){
        var bear = new Sprite(32, 32);
        var map = new Map(16, 16);
        bear.image = game.assets["chara1.png"];
        map.image = game.assets["../images1/map0.png"];
        bear.x = 0;
        bear.y = 0;
        bear.frame = 5;
        game.rootScene.addChild(map);
        game.rootScene.addChild(bear);

      
        map.loadData([[0,0,0,0,0,0,0,0,0,0,5,]]);
        map.collisionData = ([[0,0,0,0,0,0,0,0,0,0,1,]]);
        map.y =+ 64;

        bear.addEventListener("enterframe", function(){
            if(map.hitTest(this.x, this.y - 64)) {
              alert();
            }
            if(game.input.right) {
               this.x += 1;
            }
            if(game.input.down) {
              this.y += 1;
            }
            this.frame = this.age % 2 + 6;
        });

        bear.addEventListener("touchstart", function(){
            game.rootScene.removeChild(bear);
        });
    };
    game.start();
};