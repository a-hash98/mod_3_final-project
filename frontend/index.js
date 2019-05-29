const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
context.font = '45px Arial'
let movingRight = false
let tileCollided = false

let rows = 10
let columns = 10
let tileposX = [0,50,100,150,200,250,300,350,400,450]
let tileposY = [0,50,100,150,200,250,300,350,400,450]
let map = [
           [0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0]

           ]

function generateTilePos(){
  let a = tileposX[Math.floor(Math.random() * tileposX.length)]
  let b = tileposY[Math.floor(Math.random() * tileposY.length)]
  let xp = (a*2)/100
  let yp = (b*2)/100
  if (map[xp][yp] != 1){
    generateTile.x = a
    generateTile.y = b
    map[xp][yp] = 1
    generateTile.draw()
  } else {
    generateTilePos()
  }
}

const generateTile = {
  x: 0,
  y: 0,
  //x: Math.floor(Math.random() * canvas.width-50) + 0,
  //y: Math.floor(Math.random() * canvas.height-50) + 0,
  width: 50,
  height: 50,
  draw: function(){
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = "#000F00";
    context.fill();
    addLetter(this.x,this.y, this.width, this.height)
    context.closePath();
  }
}

//generateTilePos()
//generateTile.draw()



function selectConsonant() {
  let consonant           = '';
  let characters       = 'bcdfghjklmnpqrstvwxyz';
  var charactersLength = characters.length;
  consonant = characters.charAt(Math.floor(Math.random() * charactersLength));
  return consonant;
}

function selectVowel() {
  let vowel           = '';
  let characters       = 'aeiou';
  let charactersLength = characters.length;
  vowel = characters.charAt(Math.floor(Math.random() * charactersLength));
  return vowel;
}

function selectLetter() {
  let result           = '';
  let characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  result = characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

function addLetter(x,y, width, height){
  context.fillStyle = "red"
  let a = (x+(width)/2)-13
  let b = (y+(height)/2)+15
  context.fillText(selectLetter(), a, b)
}


//square to represent the player
var player = {
  x: 200,
  y: 200,
  width: 50,
  height: 50,

  dx: 2,
  dy: 2,
  draw: function() {
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = "#FF0000";
    context.fill();
    context.closePath();
  }
}

// square to represent word tile
var wordTile = {
  x: 300,
  y: 360,
  width: 50,
  height: 50,
  draw: function(){
    context.beginPath();
    context.rect(300, 360, this.width, this.height);
    context.fillStyle = "#000F00";
    context.fill();
    addLetter(wordTile.x,wordTile.y, wordTile.width, wordTile.height)
    context.closePath();
   
  }
  
}




function renderNewScene(){
  if (player.x+player.width >= (canvas.width-3)){
    // context.clearRect(0,0, canvas.width, canvas.height)
    player.x = 200
    player.y = 200
    player.draw()
    wordTile.x = 300
    wordTile.y = 360
    wordTile.draw()
  }
}

function moveRight(){
  if (movingRight == false){
    context.clearRect(0,0, canvas.width, canvas.height);
    player.x += player.dx
    player.draw()
    if (tileCollided == false){
      wordTile.x = 300
      wordTile.y = 360
      wordTile.draw()
    }
    //raf = window.requestAnimationFrame(moveRight)
  }
}

function moveLeft(){
  if (movingRight == false){
    context.clearRect(0,0, canvas.width, canvas.height);
    player.x -= player.dx
    player.draw()
    if (tileCollided == false){
      wordTile.draw()
    }
    //raf = window.requestAnimationFrame(moveRight)
  }
}

function moveDown(){
  if (movingRight == false){
    context.clearRect(0,0, canvas.width, canvas.height);
    player.y += player.dy
    player.draw()
    if (tileCollided == false){
      wordTile.draw()
    }
    //raf = window.requestAnimationFrame(moveRight)
  }
}

function moveUp(){
  if (movingRight == false){
    context.clearRect(0,0, canvas.width, canvas.height);
    player.y -= player.dy
    player.draw()
    if (tileCollided == false){
      wordTile.draw()
    }
    //raf = window.requestAnimationFrame(moveRight)
  }
}

function tileCollision(){
  if (((player.x > wordTile.x) && (player.x < wordTile.x+wordTile.width) && (player.y > wordTile.y) && (player.y < wordTile.y+wordTile.width))
|| ((player.x+player.width > wordTile.x) && (player.x+player.width < wordTile.x+wordTile.width) && (player.y+player.height > wordTile.y) && (player.y+player.height < wordTile.y+wordTile.width))
|| ((player.x > wordTile.x) && (player.x < wordTile.x+wordTile.width) && (player.y+player.height > wordTile.y) && (player.y+player.height < wordTile.y+wordTile.width))
|| ((player.x+player.width > wordTile.x) && (player.x+player.width < wordTile.x+wordTile.width) && (player.y > wordTile.y) && (player.y < wordTile.y+wordTile.width)) ){
    tileCollided = true
    //context.clearRect(0,0, canvas.width, canvas.height);
    //player.draw()

  }
}

// window.addEventListener('keypress', function(e){
//   if (e.key === 'Arr')
// })

window.addEventListener('keydown', function(e){
    if (e.key === 'ArrowRight'){
      e.preventDefault()
      renderNewScene()
      raf = window.requestAnimationFrame(moveRight)
    }
    if (e.key === 'ArrowUp'){
      e.preventDefault()
      moveUp()
      tileCollision()
      raf = window.requestAnimationFrame(moveUp)
    }
    if (e.key === 'ArrowLeft'){
      e.preventDefault()
      moveLeft()
      tileCollision()
      raf = window.requestAnimationFrame(moveLeft)
    }

    if (e.key === 'ArrowDown'){
      e.preventDefault()
      moveDown()
      tileCollision()
      raf = window.requestAnimationFrame(moveDown)
    }

})








// canvas.addEventListener('keyup', function(e) {
//   if (e.key === 'ArrowRight'){
//     console.log('key up')
//     window.cancelAnimationFrame(raf);
//   }
// });



player.draw()
wordTile.draw()

generateTilePos()
generateTilePos()
generateTilePos()
generateTilePos()
generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()

// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()
// generateTilePos()


