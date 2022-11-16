function setup(){
createCanvas(1000, 600)

box=createSprite (200,302, 50, 25)

edges = createEdgeSprites()





}






function draw(){
  background("yellow")

  box.velocityX = 0
  box.velocityY = 0

  if(keyDown("right")) {
    box.velocityX = 16
  }
  
  if(keyDown("left")) {
    box.velocityX = -16
  }
  
  box.collide(edges)

  if(keyDown("up")) {
    box.velocityY = -16 
  }

  if(keyDown("down")) {
    box.velocityY = 16 
  }

  drawSprites()

  
}






