class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    jet1=createSprite(10,displayHeight/2-50,150,150)
    jet2=createSprite(displayWidth-50,displayHeight/2-50,150,150)
    
    jet1.addImage("jet", jet1)
    jet2.addImage("fighterjet",jet2)
    jets=[jet1,jet2]
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){
    // background (bg)
     // image(bg,0,-displayHeight*4,displayWidth,displayHeight*5)
      var index = 0;
       var x =175;
       var y ;

      for(var plr in allPlayers){
      index =index+1;
      x =x+200;
      y =displayHeight-allPlayers[plr].distance;
      jets[index-1].x=x;
      jets[index-1].y=y;
      fill("yellow")
      text(allPlayers[plr].name,x-40,y+70) 
      if(index===player.index){
      //  cars[index-1].shapeColor="red"
      fill("green")
      ellipse(x,y,160,160)

      //camera.position.x =displayWidth/2
      // camera.position.y= jets[index-1].y;
      }  
       
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>3790){
      player.rank+=1;
      gameState=2;
      
     textSize(30)
     text("Game Over",displayWidth/2,3790)
     Player.updateCarsAtEnd(player.rank)
    }
    drawSprites();
  }
  end(){
    console.log("game ended")
   // game.update(2)
  console.log(player.rank)  
   
    
  }
}
