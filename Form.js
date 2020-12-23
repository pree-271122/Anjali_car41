class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
   
     this.text2=createElement("h2")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
 
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(400,10);
title.style('color','red')
title.style('font-size', '60px')

this.text2.html("PLEASE WRITE YOUR NAME HERE =>")
 this.text2.position(170,290);
 this.text2.style('color', 'orange');
 this.text2.style('font-size', '20px');

    this.input.position(550,300);
        this.input.style('width', '200px');
        this.input.style('height', '40px');
        this.input.style('background', 'skyblue');
    this.button.position(displayWidth/2+30, displayHeight/2);
    
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

   

    this.button.mousePressed(()=>{
      sound5.play();
     this.text2.hide();
      this.input.hide();
      this.button.hide();
     
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);




      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
       this.greeting.style('color', 'orange');
            this.greeting.style('font-size', '100px');
    });
  }
}
