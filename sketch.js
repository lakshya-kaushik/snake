	var snake;	
	var foodX,foodY;
	var apple;
	var playBtn;
	var playBtnImg;
	var gameState = "start";

	function preload(){
		 apple = loadImage("Images/apple.png");
		 playBtnImg = loadImage("Images/play.png");
		 bg = loadImage("Images/bg.jpeg");
		 snakeLogoImg = loadImage("Images/1.png");
		 snake=loadImage("images/2.png");
	}

	function setup() {
	 createCanvas(800,400);

	 snake = new Snake();
	 foodLocation();
	 frameRate(3);

	 playBtn = createSprite(400,300,90,40);
	 playBtn.addImage(playBtnImg);
	 playBtn.scale = 0.4;

	 snkgame = createSprite(400,70,250,120);
	 snkgame.addImage(snakeLogoImg);
	 snkgame.scale = 0.8;
	}
	
	function draw() {
	 background(bg); 
	
	 if(gameState === "start"){
		 playBtn.visible = true;
		 snkgame.visible = true;
	    }

	 if(gameState === "start" && mousePressedOver(playBtn)){
		 playBtn.visible = false;
		 snkgame.visible = false;
		 gameState = "play";
	    }

	 if(gameState === "play"){
			snake.update();
			
			// new location is generated when the snake eats the food
			if(snake.eat(foodX,foodY)){
				//write code to call location of Food function
				foodLocation();
			}
			
			snake.display();
			//fill("yellow");
			//Create Food along with location and size
			//rect(foodX,foodY,20,20);
			
			image(apple,foodX,foodY,20,20);  
			//write code to call game over function
			snake.gameOver();
		}
		
	 drawSprites();
	}
	
  	//write Code to control snake's direction
	function keyPressed(){    
	 if(keyCode === LEFT_ARROW){
        snake.xdir = -20;
        snake.ydir = 0;
	 }
	 else if(keyCode === RIGHT_ARROW){
        snake.xdir = 20;
        snake.ydir = 0;        
	 }
	 if(keyCode === UP_ARROW){
        snake.xdir = 0;
        snake.ydir = -20;        
	 }
	 if(keyCode === DOWN_ARROW){
        snake.xdir = 0;
        snake.ydir = 20;
	 }
	}
	
	// Getting random location for Food
	function foodLocation (){       

	 //Ensuring the food falls in grids of 20 units
	 foodX = floor(random(0,40))*20;
	 foodY = floor(random(0,20))*20;
	}