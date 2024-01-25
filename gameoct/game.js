enchant();
window.onload = function(){
console.log("Window is loaded.");
  var game = new Core(320, 320);
      game.fps = 15;
      game.preload("chara1.png"); //("../enchant/images/chara1.png");
game.onload = function(){
console.log("Game is loaded.");
        var dx = 1;
        var bear = new Sprite(32, 32);
        var enemy = new Sprite(32, 32);
        var girl = new Sprite(32, 32);
console.log(bear);        
        bear.image = game.assets["chara1.png"];
        enemy.image = game.assets["chara1.png"];
        girl.image = game.assets["chara1.png"];
        bear.x = 160;
        bear.y = 160;
        girl.x = 288;
        girl.y = 0;
        enemy.x = 0;
        enemy.y = 0;
        //for (let count = 10; this.x < count; this.x++);
       // bear.x = function(){
         // if (bear.x < 10){
           // bear.x++
          //}
        //}
       // bear.x++;
        //bear.scaleX = -1;
        bear.frame = [1, 2]; 
        enemy.frame = [6, 7];
        girl.frame = [11, 12];
        girl.tl.moveTo(bear.x, bear.y, 100).moveTo(0, 0, 100).loop();
        game.rootScene.addChild(bear);
        game.rootScene.addChild(enemy);
        game.rootScene.addChild(girl);
         game.rootScene.addEventListener("keydown", function(e){
            
            console.log(e);
          
        });
        //game.keybind(32, "space");
        game.keybind(83, "S"); // down ASCI CODE (83)
        game.keybind(115, "s"); // down (115)
        game.keybind(68, "D"); // right 
        game.keybind(100, "d"); // right
        game.keybind(65, "A"); // left
        game.keybind(97, "a"); // left
        game.keybind(87, "W"); // up
        game.keybind(119, "w"); // up
        game.rootScene.addEventListener("enterframe", function() {
           // if (game.input.A) {
//              alert();
//              game.stop();
//            }
        });
        game.rootScene.addEventListener("touchend", function(e){
            
            console.log("TOUCH_END:game.rootScene:("+Math.floor(e.x)+","+Math.floor(e.y)+")");
          
        });
        enemy.addEventListener("enterframe", function() {
          
          enemy.tl.clear();
          enemy.tl.moveTo(bear.x, bear.y, 40); // last number is the easing into the moving subject 
          if (enemy.tl.moveTo === bear.x) {
            alert("game over");
          }
        });
  
        bear.addEventListener("enterframe", function() {
          console.log();
          if(game.input.down || game.input.S ){
            bear.y++;
          }
           if (game.input.right || game.input.D) {
            bear.scaleX = 1;
            bear.x++;
          }
           if (game.input.left || game.input.A) {
            bear.scaleX = -1;
            bear.x--;
          }
           if (game.input.up  || game.input.W) {
            bear.y--;
          }
          //this.x += 1;
          /*if(bear.scaleX === 1){
          bear.x++;
        }  if (bear.x === 30){
          bear.scaleX = -1;
        } if (bear.scaleX === -1) {
          bear.x--;
        } if (bear.x < 0){
          bear.scaleX = 1;
        }*/
          //bear.x = bear.x + dx;
         /* console.log(bear.x);
          if(bear.x >= 320-32 ){
            dx *= -1;
            bear.scaleX *= -1;
          }
          if( bear.x <= 0) {
            dx *= 1;
            bear.scaleX *= -1;
          }*/
          
         
        });
        bear.addEventListener("touchend", function(){
            dx *= -1;
           
           //if(touchend()) 
          
            console.log("TOUCH_END:bear");
          
        });
       
      };
        game.start()
        };