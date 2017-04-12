//create var to keep track of Easy/Hard and # of squares
var numSquares = 6; 
    
//function to create random colors
var colors = generateRandomColors(numSquares);

//loop through the squares to randomize the COLORS
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();//function

//"Correct" or "Try Again" display
var messageDisplay = document.querySelector("#message");

var colorDisplay = document.getElementById("colorDisplay");
//changes the HTML <span> element 
colorDisplay.textContent = pickedColor;

//select the <h1> tag to change color to clickedColor
var h1 = document.querySelector("h1");

//selecting <button id="reset"> to reset "New Colors" btn
var resetButton = document.querySelector("#reset");

//select .mode 
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        
        if(this.textContent === "Easy") {
        
            numSquares = 3;
            
        } else {
            
            numSquares = 6;
            
        }
        
        reset();
    });
}

resetButton.addEventListener('click', reset);

function reset() {
    
    //generate all new colors
    colors = generateRandomColors(numSquares);
    
    //pick new random color form array
    pickedColor = pickColor();
    
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    
    //change colors of squares
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

////reset the game back to the beginning
//resetButton.addEventListener("click", function(){
//    //generate all new colors
//    colors = generateRandomColors(numSquares);
//    //pick new random color form array
//    pickedColor = pickColor();
//    //change colorDisplay to match pickedColor
//    colorDisplay.textContent = pickedColor;
//    //change colors of squares
//    for (var i = 0; i < squares.length; i++){
//        squares[i].style.background = colors[i];
//    }
//    h1.style.background = "steelblue";
//    resetButton.textContent = "New Colors";
//    messageDisplay.textContent = "";
//    
//});
//
////function for easyBtn
//easyBtn.addEventListener("click", function(){
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    //when clicked, needs to reset to (3) colors
//    numSquares = 3;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    //loop to hide the bottom row of colors
//    for (var i = 0; i < squares.length; i++){
//        if(colors[i]){
//            squares[i].style.background = colors[i];
//        } else {
//            squares[i].style.display = "none";
//        }
//    }
//});
//
////function for hardBtn
//hardBtn.addEventListener("click", function(){
//    easyBtn.classList.remove("selected");
//    hardBtn.classList.add("selected");
//    //when clicked, needs to reset back to (6) colors
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    //loop to hide the bottom row of colors
//    for (var i = 0; i < squares.length; i++){
//            squares[i].style.background = colors[i];
//            squares[i].style.display = "block";
//    }
//});

//changes all squares to the clickedColor
function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++){
    
        //change each color to match given color(argument)
        squares[i].style.background = color;
    }
}

//picking random number then accessing the color value
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generates random colors
function generateRandomColors(num){
    //make an array
    var arr = []
    
    //loop through to repeat (num) times
    for (var i = 0; i < num; i++){
        //function to get random color & push into arr
        arr.push(randomColor());
    }
    
    //return array
    return arr;
}

//function to get random color & push into arr
function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    
    //"rgb(255, 255, 255)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


//loops through the SQUARES 
for (var i = 0; i < squares.length; i++){
    //added initial colors to squares
    squares[i].style.background = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of picked square
        var clickedColor = this.style.background;
        
        //to compare color to pickedColor
        if(clickedColor === pickedColor){
            //changes "message" content to "Correct!"
            messageDisplay.textContent = "Correct!";
            //changes "New Colors" to "Play Again"
            resetButton.textContent = "Play Again?";
            //changes squares to clickedColor
            changeColors(clickedColor);
            //changes the <h1> background to clickedColor
            h1.style.background = clickedColor;
            
        } else {
            //fades color into background
            this.style.background = "#232323";
            //changes "message" content to "Try Again"
            messageDisplay.textContent = "Try Again"
        }
    })
} 
