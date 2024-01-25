enchant();
var game = new Core(480, 320);

Bear = enchant.Class.create(Sprite, {
    initialize: function() {
        var game = enchant.Game.instance;
        Sprite.call(this, 32, 32);
        this.image = game.assets['chara1.png'];
        this.addEventListener('enterframe', function() {
            if (this.x < -180 || 640 < this.x ||
                this.y < -180 || 500 < this.y) {
                this.scene.removeChild(this);
            }
        });
    }
});

Enemy = enchant.Class.create(Bear, {
  initialize: function() {
    Bear.call(this);
    //this.frame = 5;
    this.lifetime = 60;
    this.x = rand(500);
    this.y = rand(50);
    this.frame = [6, 6, 7 , 7];
    
    game.rootScene.addChild(this);
    console.log(this.x, this.y);
    this.addEventListener("enterframe", function(){
      //this.y++;
      this.tl.moveTo(rand(100), rand(1500), 300);
      
       /*if(game.input.down || game.input.S ){
              this.y++;
        
         }
         if (game.input.right || game.input.D) {
              this.x++;
            }
             if (game.input.left || game.input.A) {
              this.x--;
            }
             if (game.input.up  || game.input.W) {
             this.y--;
            }*/ 
          
      this.lifetime--;
      console.log("lifetime value: " + this.lifetime)

      if (this.lifetime < 0) {
        game.rootScene.removeChild(this)
      }
    });
  },
  
});



function rand(max) {
  return Math.floor(Math.random() * 10000 % max);
}
 
window.onload = function() {
  game.keybind(83, "S"); // down ASCI CODE (83)
        game.keybind(115, "s"); // down (115)
        game.keybind(68, "D"); // right 
        game.keybind(100, "d"); // right
        game.keybind(65, "A"); // left
        game.keybind(97, "a"); // left
        game.keybind(87, "W"); // up
        game.keybind(119, "w"); // up
  game.preload('chara1.png'); 
  game.onload = function() {
//    console.log(bear);
    game.addEventListener("enterframe", function () {
      
       var bear = new Bear();
        bear.x = 144;
        bear.y = 144;
        
        bear.frame = [1, 1, 2, 2];
         game.rootScene.addChild(bear);
        
          bear.addEventListener("enterframe", function() {
          
          if(game.input.down || game.input.S ){
              bear.y++;
        
         }
         if (game.input.right || game.input.D) {
              bear.x++;
              bear.scaleX = 1;
            }
             if (game.input.left || game.input.A) {
              bear.x--;
              bear.scaleX = -1;
            }
             if (game.input.up  || game.input.W) {
             bear.y--;
            }
        });
      
      if (game.frame % rand(10) == 0 ) {
        var enemy = new Enemy();
       

     
      }
     
        
      //var player = new Player();
      
   // game.rootScene.addChild(enemy);

    });
};
game.start();
}