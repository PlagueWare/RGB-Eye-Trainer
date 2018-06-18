var header = document.getElementById("header");
var colorDisplay = document.getElementById("colorDisplay");
var resetBtn = document.getElementById("resetBtn");
var messageDisplay = document.getElementById("messageDisplay");
var mode = document.getElementsByClassName("mode");
var squares = document.querySelectorAll(".square");
var victoryColor = "RGB(0, 0, 0)";
var numSquares = 6;

function randRGB(){
    var RGB = "rgb(";
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    RGB += r += ", ";
    RGB += g += ", ";
    RGB += b += ")";
    return RGB;
}

function beginEventListeners(){
    for (var i = 0; i < numSquares; i++){
        squares[i].addEventListener("click", function(){
            if (this.style.backgroundColor !== victoryColor){
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            } else {
                for (var i = 0; i < numSquares; i++){
                    squares[i].style.backgroundColor = victoryColor;
                }
                header.style.backgroundColor = victoryColor;
                messageDisplay.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
            } 
        });
    }

    for (var i = 0; i < mode.length; i++){
        mode[i].addEventListener("click", function(){
            if (!this.classList.contains("selectedMode")){
                for (var i = 0; i < mode.length; i++)
                    mode[i].classList.remove("selectedMode");
                
                this.classList.add("selectedMode");
                for (var i = (numSquares/2); i < numSquares; i++){
                    if (squares[i].style.display === "none")
                        squares[i].style.display = "block";
                    else
                        squares[i].style.display = "none"    
                }
                reset();
            }
        });
    }

    resetBtn.addEventListener("click", function (){
        reset();
    });
}

function randomizeVictoryColor(){
    victoryColor = randRGB();
    colorDisplay.textContent = victoryColor;
}

function randomizeSquareColors(){
    squares[0].style.backgroundColor = randRGB();
    for (var i = 1; i < numSquares; i++){
        if (squares[i].style.display !== "none"){
            squares[i].style.backgroundColor = randRGB();
            while (squares[i].style.backgroundColor === squares[i-1].style.backgroundColor){
                this.style.backgroundColor = randRGB(); 
            }
        }
    }
}

function randomizeVictorySquare(){
    var n = 0;
    for (var i = 0; i < numSquares; i++){
        if(squares[i].style.display !== "none") n += 1;
    }
    var r = Math.floor(Math.random() * n);
    squares[r].style.backgroundColor = victoryColor;
}

function reset(){
    header.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    randomizeVictoryColor();
    randomizeSquareColors();
    randomizeVictorySquare();
}

// PROGRAM STARTS HERE

beginEventListeners();
randomizeVictoryColor();
randomizeSquareColors();
randomizeVictorySquare();





