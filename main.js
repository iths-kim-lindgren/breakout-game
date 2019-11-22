// let canvas = document.querySelector("#myCanvas")
// let ctx = canvas.getContext("2d")

// let Game = {

//     x: canvas.width / 2,
//     y: canvas.height - 30,
//     dx: 2,
//     dy: -2,
//     ballRadius: 10,
//     paddleHeight: 10,
//     paddleWidth: 75,
//     paddleX: (canvas.width - this.paddleWidth) / 2,
//     rightPressed: false,
//     leftPressed: false,
//     brickRowCount: 3,
//     brickColumnCount: 5,
//     brickWidth: 75,
//     brickHeight: 20,
//     brickPadding: 10,
//     brickOffsetTop: 30,
//     brickOffsetLeft: 30,
//     bricks: [],

//     score: 0,
//     lives: 3,

//     drawBall() {
//         ctx.beginPath();
//         ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//     },

//     drawPaddle() {
//         ctx.beginPath();
//         ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//     },

//     drawBricks() {
//         for (var c = 0; c < brickColumnCount; c++) {
//             for (var r = 0; r < brickRowCount; r++) {
//                 if (bricks[c][r].status == 1) {
//                     var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
//                     var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
//                     bricks[c][r].x = brickX;
//                     bricks[c][r].y = brickY;
//                     ctx.beginPath();
//                     ctx.rect(brickX, brickY, brickWidth, brickHeight);
//                     ctx.fillStyle = "#0095DD";
//                     ctx.fill();
//                     ctx.closePath();
//                 } else {
//                     console.log("stop")
//                 }
//             }
//         }
//     },

//     mouseMoveHandler(e) {
//         var relativeX = e.clientX - canvas.offsetLeft;
//         if (relativeX > 0 && relativeX < canvas.width) {
//             paddleX = relativeX - paddleWidth / 2;
//         }
//     },

//     keyDownHandler(e) {
//         if (e.key == "Right" || e.key == "ArrowRight") {
//             rightPressed = true;
//         }
//         else if (e.key == "Left" || e.key == "ArrowLeft") {
//             leftPressed = true;
//         }
//     },

//     keyUpHandler(e) {
//         if (e.key == "Right" || e.key == "ArrowRight") {
//             rightPressed = false;
//         }
//         else if (e.key == "Left" || e.key == "ArrowLeft") {
//             leftPressed = false;
//         }
//     },

//     collisionDetection() {
//         for (var c = 0; c < brickColumnCount; c++) {
//             for (var r = 0; r < brickRowCount; r++) {
//                 var b = bricks[c][r]
//                 if (b.status == 1) {
//                     if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
//                         dy = -dy;
//                         b.status = 0;
//                         score++;
//                         if (score == brickRowCount * brickColumnCount) {
//                             alert("YOU WIN!");
//                             document.location.reload();
//                         }
//                     }
//                 }
//             }
//         }
//     },

//     drawScore() {
//         ctx.font = "16px Arial";
//         ctx.fillStyle = "#0095DD";
//         ctx.fillText("Score: " + score, 8, 20);
//     },

//     drawLives() {
//         ctx.font = "16px Arial";
//         ctx.fillStyle = "#0095DD";
//         ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
//     },

//     draw() {
//         document.addEventListener("keydown", keyDownHandler, false);
//         document.addEventListener("keyup", keyUpHandler, false);
//         document.addEventListener("mousemove", mouseMoveHandler, false);    

//         for(var c=0; c<brickColumnCount; c++) {
//             bricks[c] = []
//             for(var r=0; r<brickRowCount; r++) {
//                 bricks[c][r] = { x: 0, y: 0, status: 1 }
//             }
//         }
//         // drawing code
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         drawBricks()
//         drawBall()
//         drawPaddle()
//         drawScore()
//         drawLives()
//         collisionDetection()
//         x += dx;
//         y += dy;
//         if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//             dx = -dx; //if edge of ball hits left or right walls, change its direction
//         }
//         if (y + dy < ballRadius) {
//             dy = -dy; //if edge of ball hits top wall, change its direction
//         } else if (y + dy > canvas.height - ballRadius) {
//             if (x > paddleX && x < paddleX + paddleWidth) {
//                 dy = -dy; //if edge of ball hits bottom wall, then if ball is inbetween paddle coordinates, change direction
//             }
//             else {
//                 --lives;
//                 if (!lives) {
//                     alert("GAME OVER");
//                     document.location.reload();
//                 }
//                 else {
//                     x = canvas.width / 2;
//                     y = canvas.height - 30;
//                     dx = 2;
//                     dy = -2;
//                     paddleX = (canvas.width - paddleWidth) / 2;
//                 }
//             }
//         }
//         if (rightPressed) {
//             paddleX += 7;
//             if (paddleX + paddleWidth > canvas.width) {
//                 paddleX = canvas.width - paddleWidth;
//             }
//         }
//         else if (leftPressed) {
//             paddleX -= 7;
//             if (paddleX < 0) {
//                 paddleX = 0;
//             }
//         }
//         // requestAnimationFrame(draw);
//     }
// }

// // let game = new Game()
// let interval = setInterval(Game.draw, 10); //varför fungerar detta när metoden inte anropas?
// // draw()


// Paddle
// Brick
// Ball


let canvas = document.querySelector("#myCanvas")
let ctx = canvas.getContext("2d")
let canvasWidth = 480
let canvasHeight = 320

class Ball {
    constructor(vx, vy) {
        this.radius = 5
        this.color = "red"
        this.x = canvasWidth / 2
        this.y = 290
        this.vx = vx
        this.vy = vy
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    
    checkCollision(hitBrick) {
        if (hitBrick.status == 1) {
            if (this.x > hitBrick.x &&
                this.x < hitBrick.x + hitBrick.width &&
                this.y > hitBrick.y &&
                this.y < hitBrick.y + hitBrick.height) {
                    this.vy = -this.vy;
                    hitBrick.collide(hitBrick)
                    return true
                } else {
                    return false
                }
            }
        }
        
        update() {
            this.x += this.vx
            this.y += this.vy
            if (this.x + this.vx > canvas.width - this.radius || this.x + this.vx < this.radius) {
                this.vx = -this.vx; //if edge of ball hits left or right walls, change its direction
            }
            if (this.y + this.vy < this.radius) {
                this.vy = -this.vy; //if edge of ball hits top wall, change its direction
            } else if (this.y + this.vy > canvas.height - this.radius) {
                if (this.x > paddle.x && this.x < paddle.x + paddle.width) {
                    this.vy = -this.vy; //if edge of ball hits bottom wall, then if ball is inbetween paddle coordinates, change direction
                }
            }
        }
    }
    
    class Level {
        constructor() {
            this.bricks = []
            this.padding = 10
            this.brickOffsetTop = 30
            this.brickOffsetLeft = 30
            this.brickColumnCount = 5
            this.brickRowCount = 3
            this.level = 1
        }
        
        createBricks(){ //skapa arrayen av bricks och ge dem x- och y-koordinater
            for (var c = 0; c < this.brickColumnCount; c++) {
                this.bricks.push([])
                for (var r = 0; r < this.brickRowCount; r++) {
                    let brick = new Brick(0,0)
                    brick.x = (c * (brick.width + this.padding)) + this.brickOffsetLeft;
                    brick.y = (r * (brick.height + this.padding)) + this.brickOffsetTop;
                    this.bricks[c].push(brick)
                }
            }
        }
        
        drawBricks(ctx) { 
            // bricks.flat()
            //arr draw
            for (let brick of this.bricks.flat()) {
                brick.draw(ctx, brick.x, brick.y)
            }
            
        }
    }
    
    class Brick {
        constructor(x, y) {
            this.width = 75
            this.height = 20
            // this.color = ["#FFF000", "#345896", "#AA7462"][Math.floor(Math.random() * 3)]
            this.color = "#FF000"
            this.x = x
            this.y = y
            this.status = 1
        }
        
        draw(ctx, brickX, brickY) {
            if (this.status == 1){
                ctx.beginPath();
                ctx.rect(brickX, brickY, this.width, this.height);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }
        }
        collide(hitBrick){
            hitBrick.status = 0
        }
    }
    
    class Paddle {
        constructor(vx, vy) {
            this.width = 60
            this.height = 10
            this.color = "blue"
            this.x = 0
            this.y = 0
            this.vx = vx
            this.vy = vy
            // this.status = 1
        }
        
        draw(ctx) {
            ctx.beginPath();
            ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
        
        update() {
            this.x += this.vx
        }
    }
    
    class Score {
        constructor(){
            this.score = 0
        }
        checkScore() {
            this.score++
            console.log(this.score)
            if (this.score == level.brickColumnCount * level.brickRowCount){
                alert("You win!")
                document.location.reload()
            }
        }
        drawScore() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Score: " + this.score, 8, 20);
        }
    }
    
    class Lives {
        constructor() {
            this.lives = 3
        }
        
        updateLives(){
            this.lives--
            this.checkLives()
        }
        
        checkLives() {
            if(this.lives <1){
                alert("You loose!")
                window.location.reload()
            }
        }
        drawLives() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Lives: " + this.lives, canvas.width - 65, 20);
        }
    }
    
    
    
    // for (let i = 0; i < 15; i++) [
    //     bricks.push(new Brick(70 * i, 20))
    // ]
    let ball = new Ball(1, -1)
    let paddle = new Paddle(0, 0)
    let level = new Level()
    let up = false, down = false, right = false, left = false;
    let score = new Score()
    let lives = new Lives()
    
    window.addEventListener("keydown", event => {
        switch (event.key) {
            case "ArrowLeft":
            left = true; break;
            case "ArrowRight":
            right = true; break;
        }
    })
    window.addEventListener("keyup", event => {
        switch (event.key) {
            case "ArrowLeft":
            left = false; break;
            case "ArrowRight":
            right = false; break;
        }
    })
    
    
    function gameLoop() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        
        // USER INPUT
        paddle.vx = 0; paddle.vy = 0;
        if (left) { paddle.vx = -2; }
        if (right) { paddle.vx = 2; }
        // if (up) { ball.vy = -1; }
        // if (down) { ball.vy = 1; }
        // UPDATE WORLD
        ball.update()
        paddle.update()
        // level.createBricks()
        // CHECK COLLISIONS
        for (let item of level.bricks) {
            for (let i of item) {
                if (ball.checkCollision(i)) {
                    score.checkScore()
                }
            }
        }
        // ball.checkCollision(paddle)
        if(ball.y > canvasHeight){
            ball.x = canvasWidth /2
            ball.y = canvasHeight - 200
            lives.updateLives()
        }
        // RENDER WORLD
        level.drawBricks(ctx)
        score.drawScore()
        lives.drawLives()
        
        
        // for (let brick of bricks) {
        // brick.draw(ctx)
        // }
        
        paddle.draw(ctx)
        ball.draw(ctx)
        
    }
    level.createBricks()
    
    
    let interval = setInterval(gameLoop, 10)