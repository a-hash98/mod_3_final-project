const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
let movingRight = false
//square to represent the player
var player = {
 x: 20,
 y: 40,
 dx: 2,
 dy: 2,
 draw: function() {
   context.beginPath();
   context.rect(this.x, this.y, 50, 50);
   context.fillStyle = "#FF0000";
   context.fill();
   context.closePath();
 }
}

// square to represent word tile
var wordTile = {
 draw: function(){
   context.beginPath();
   context.rect(300, 360, 50, 50);
   context.fillStyle = "#FFFFFF";
   context.fill();
   context.closePath();
 }
}

function moveRight(){
 if (movingRight == false){
   context.clearRect(0,0, canvas.width, canvas.height);
   player.x += player.dx
   player.draw()
   wordTile.draw()
   //raf = window.requestAnimationFrame(moveRight)
 }
}

// window.addEventListener('keypress', function(e){
//   if (e.key === 'Arr')
// })

window.addEventListener('keydown', function(e){
   if (e.key === 'ArrowRight'){
     console.log('key down')
     moveRight()
     raf = window.requestAnimationFrame(moveRight)
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