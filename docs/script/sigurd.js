// figur laget med canvas
const figures = document.getElementById('canvas');
const ctx = figures.getContext('2d');
figures.width = window.innerWidth;
figures.height = window.innerHeight;

function drawCircle(){
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(550, 600, 240, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 
}

var x = 730;
var y = 390;
var width = 250;
var height = 20;

function drawRectangle() {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.fillRect(x, y, width, height);
    ctx.fill();
    ctx.beginPath();
    ctx.closePath();
    ctx.stroke();

}

var rectangle2x = 120;
var rectangle2y = 390;

function drawRectangle2() {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'white';
    ctx.fillRect(rectangle2x, rectangle2y, width, height);
    ctx.fill();
    ctx.beginPath();
    ctx.closePath();
    ctx.stroke();

}

function drawCircle2() {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(550, 400, 175, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 
}

function drawCircle3() {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(550, 200, 125, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 
}


function drawCircle5() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(600, 175, 20, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawCircle4() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(500, 175, 20, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

    var munnX = 490;
    var munnY = 270;
    var munnWidth = 120;
    var munnHeight = 10;

    function drawRectangle3() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.fillRect(munnX, munnY, munnWidth, munnHeight);
        ctx.fill();
        ctx.closePath();

    }


    function drawTriangle() {
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(525, 240);
      ctx.lineTo(575, 240);
      ctx.lineTo(550, 200);
      ctx.lineTo(525, 240);
      ctx.closePath();
      ctx.fill();
    }

        drawCircle()
        drawCircle2()
        drawCircle3()
        drawCircle4()
        drawCircle5()
        drawRectangle()
        drawRectangle2()
        drawRectangle3()
        drawTriangle()



// SVG



