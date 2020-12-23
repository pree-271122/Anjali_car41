class Game {
  constructor(){
    this.win1=createElement("h2")
   
       this.reset=createButton('Reset')
  }

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
  reset_car_end(value)
  {
    database.ref('/').update({
      CarsAtEnd: value
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

 this.reset.mousePressed(()=>{
  player.updateCount(0);
  game.update(0)
  game.reset_car_end(0)
  form=new Form()
  form.display()
 this.win1.hide()
})
  }
     
    
    car1=createSprite(100,200)
    car1.addImage("car1",car1img)
    car1.scale=0.25
    car2=createSprite(300,200)
     car2.addImage("car2",car2img)
     car2.scale=0.25
   car3=createSprite(500,200)
    car3.addImage("car3",car3img)
    car3.scale=0.17
     car4=createSprite(700,200)
      car4.addImage("car4",car4img)
      car4.scale=0.06;
     cars=[car1,car2,car3,car4]

  }

  play(){
    form.hide();
   // textSize(30);
   // text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCarsAtEnd();
  this.reset.position(displayWidth-100,30)
  this.reset.style('width', '80px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'yellow');
    if(allPlayers !== undefined){
    
      background("pink")
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
     // image(aud,1099,300,200,700)
     
     // var display_position = 130;
     var index=0;
     var x=175
     var y;
    for(var plr in allPlayers){
       index=index+1
      x=x+200;
       y=displayHeight-allPlayers[plr].distance
      
        cars[index-1].x=x
        cars[index-1].y=y
        if(index===player.index){
        fill("red")
          ellipse(x,y,60,60)
         // text(allPlayers[plr].name,x-25,y+25)
       cars[index-1].shapeColor="red" 
       camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y

        }
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
     sound4.play();
      player.distance +=30
      player.update();
    }
   
   if(player.distance>3860){
      gameState=2
      player.rank+=1
    Player.updateCarsAtEnd(player.rank);
    this.win1.html("Congratulation You Won")
   this.win1.position(300,100)
   this.win1.style('color','blue')
  this.win1.style('font-size', '70px');
  sound1.play();
  
   }
    // if(frameCount%20===0){
    
// obstacle=createSprite(Math.round(random(200,500)),50,10,10);
 // obstacle.addImage("obs",obstacleimg);
 // obstacle.velocity=4
 //obstacleGrp.add(obstacle);
  //  }

    
     
    drawSprites()
}
  end(){
    console.log("gameEnd")
    console.log(player.rank)
 image(trophy,600,-displayHeight*4,200,200)
   image(car,300,-displayHeight*4,100,100)
  }
  
}
