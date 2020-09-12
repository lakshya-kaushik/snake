class Snake {	

    constructor(){
       this.snakeXPosition = [];    //Store X locations in this Array
       this.snakeYPosition = [];    //Store Y locations in this Array
       this.xdir = 0;               //This defines speed of the snake
       this.ydir = 0;               //This defines speed of the snake
       this.tailCount = 1;          //Store number of boxes in the snake (This has to be 1 initially)
       this.x = 20;                   //Latest X location of Head
       this.y = 20;                  //Latest Y location of Head
       this.snakeImg =[];
      }
   

    update(){   
        if(!this.gameOver()){//Keep checking if Game is Over
          //write code to increment X position for next step
          this.x += this.xdir;

          //write code to increment Y position for next step
          this.y += this.ydir;

        //Deleting old positions if the number of positions is more than the tail count
          if(this.snakeXPosition.length >= this.tailCount){  
             
          //write code to delete old position of x
          this.snakeXPosition.shift();
          //write code to delete old position of y
          this.snakeYPosition.shift();
          }

          //write code to add latest X position of the head
          this.snakeXPosition.push(this.x);
          
          //write code to add Y position of the head
          this.snakeYPosition.push(this.y);

      }
      }
   
   eat(x,y){   
   //If the head is in the same location as food, the food will be considered eaten
      if(this.x===x && this.y===y){  
       //write code to increment tailCount
       this.tailCount++;
       return true;   //Food eaten
       }
       else{
       return false;  //Food not eaten
       }
      }
     gameOver(){   
   //Checking if the snake goes out of the gaming Area
        if(this.x > 800 || this.x < 0 || this.y > 400 || this.y < 0){
       
          //write code to display text "GAME OVER"
          background("red");
          stroke("blue");
          strokeWeight(2.7);
          fill("yellow");
          textFont("georgia");
          textSize(27);
          text("Refresh to restart",290,100);
          textSize(30);
          text("GAME OVER !",300,50);       
          return true;
         }
          else return false;
        }

      display(){
      
        //drawing the body of the snake
        for(var i= 0;i<this.tailCount;i++){

       //write code to create var x,y and assign snakeXPosition[i],snakeYPosition[i] respectively
       var x = this.snakeXPosition[i];
       var y = this.snakeYPosition[i];
          fill("black");
          circle(x,y,25,25)     //Ensuring the snake moves in grid of 20 units in a step
        }
   }
   }