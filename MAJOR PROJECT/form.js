class Form{
    constructor(){
    this.input=createInput("")
    this.text1=createElement("h3")
    this.text2=createElement("h1")
    this.button=createButton("PLAY")
    this.greeting=createElement("h2")
    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.text1.hide();
        this.greeting.hide();
        this.text2.hide();
      }

    display(){
    this.text1.html("NAME")
    this.text1.position(80,180)
    this.input.position(160,200)
    this.text2.html("FIGHTER JETS")
    this.text2.position(80,50)
    this.button.position(170,250)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.text1.hide();
            this.text2.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2-60, 100);
          });
      
}
}