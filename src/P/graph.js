function translateX(x) {
    return x + W/2;
}

function translateY(y) {
    return H/2 - y;
}

function drawCircle(x, y) {
    context.beginPath();
    context.arc(translateX(x), translateY(y), RADIUS, 0, 2 * Math.PI, false);
    context.fillStyle = 'black';
    context.fill();
}

function plot(f, amount, range) {
    // f = f(x) => return x*2; amount is granularity, rangeX = [-1, 1];
    var step = (Math.abs(range[0]) + Math.abs(range[1]))/amount;
    for (var x=range[0]; x<range[1]; x+= step) {
        console.log(x);
        drawCircle(x, f(x));
    }
}

function f(x) {
    return (100 * Math.sin(x*Math.PI/180))*Math.exp(-0.002*x);;
}

function combined(x) {
    return 100*Math.sin(3*x*Math.PI/180) + 100*Math.sin(3.5*x*Math.PI/180);
}

function square(x) {
    return 100*Math.sin(x*Math.PI/180) + 100*Math.sin(3*x*Math.PI/180)/3 + 100*Math.sin(5*x*Math.PI/180)/5;
}

//plot(f, 1500, [-800, 800]);

function drawLine(x, y, x1, y1, style) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x1, y1);
    context.strokeStyle = style;
    context.stroke();
}

function drawGrid() {
    for (var x=0; x<W; x+=10) {
            var color = '#cccccc';
        if (x === W/2) color = '#ff5555';
        drawLine(x, 0, x, H, color);
    }
    for (var y=0; y<H; y+=10) {
        var color = '#cccccc';
        if (y === H/2) color = '#ff5555';
        drawLine(0, y, W, y, color);
    }
}

//drawGrid();
//plot(combined, 2050, [-800, 800]);