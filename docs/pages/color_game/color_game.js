var colors = [];
var h1 = document.querySelector("h1")
var squares = document.querySelectorAll(".square")
var colorDisplay = document.querySelector("#rgb")
var message = document.querySelector("#message")
var resetButoon = document.querySelector("#reset");
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")
var numsquares = 6;
var modebutton = document.querySelectorAll(".mode")

init();

function init(){
    //even listeners
    setupmod();
    setupsquares();
    reset();
}

function setupsquares(){
    for (var i = 0 ;i<squares.length;i++){
        //add colors to squares
        //add event listeners
        squares[i].addEventListener("click",function(){
            var clicked_color = this.style.backgroundColor;
            if(clicked_color === k ){
                changecolors(clicked_color);
                message.textContent = "correct";
                h1.style.backgroundColor = k;
                resetButoon.textContent = "PLAY AGAIN"
            }
            else 
            {
                this.style.backgroundColor = "#232323";
                message.textContent = "try again";
            }
        })
    }
    

}

function setupmod(){
    for (var i=0; i< modebutton.length ;i++){
        modebutton[i].addEventListener("click",function(){
            modebutton[0].classList.remove("selected")
            modebutton[1].classList.remove("selected")
            this.classList.add("selected");
            if(this.textContent == "Easy")
            {
                numsquares = 3;
            }
            else
            {
                numsquares = 6;
            }
            reset();
        })
    }
}

function reset(){
    colors = generateRandomColors(numsquares);
    resetButoon.textContent = "New Colors"
    message.textContent = "";
    k = pickedColor();
    colorDisplay.textContent = k;
    for (var i = 0 ;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
        
       
    }
    h1.style.backgroundColor = "steelblue";
}





resetButoon.addEventListener("click",function(){ 
    resetButoon.textContent = "NEW COLORS"
    reset();
    h1.style.backgroundColor = "steelblue";

})




for (var i = 0 ;i<squares.length;i++){
    //add colors to squares
    //add event listeners
    squares[i].addEventListener("click",function(){
        var clicked_color = this.style.backgroundColor;
        if(clicked_color === k ){
            changecolors(clicked_color);
            message.textContent = "correct";
            h1.style.backgroundColor = k;
            resetButoon.textContent = "PLAY AGAIN"
        }
        else 
        {
            this.style.backgroundColor = "#232323";
            message.textContent = "try again";
        }
    })
}

function changecolors(clicked_color){
    for (var i = 0 ;i<squares.length;i++){
        squares[i].style.backgroundColor = clicked_color;
    }
}


function pickedColor() {
    var random = Math.floor(Math.random()*colors.length)
    return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for (var i=0; i< num ;i++){
        red = randomColor()
        green = randomColor()
        blue = randomColor()
        arr.push("rgb(" + red + ", " + green + ", " + blue + ")")
    }
    return arr
}

function randomColor(){
    color = Math.floor(Math.random()*256);
    return color;
}
