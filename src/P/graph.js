export default class Graph {

    constructor(context, xmin, xmax, ymin, ymax, x0, y0, xwidth, ywidth) {
        this.ctx = context;

    	this.x_tick_major;
    	this.x_tick_minor;
    	this.y_tick_major;
    	this.y_tick_minor;
    	// scaling used in displaying values on the axes
    	this.x_displ_scal;
    	this.y_displ_scal;
    	// width and height of textbox used for displaying values on the axes
    	// this should not have to be tampered with (I hope)
    	this.tw=15;
    	this.th=20;
    	// declarations for quantities to be used later
    	this.x_min;
    	this.x_max;
    	this.y_min;
    	this.y_max;
    	this.xx;
    	this.yy;
    	this.x_displ;
    	this.y_displ;
    	this.txpos;
    	this.typos;

    // PARAMETER ASSIGNMENTS
    	// assign parameter values based on specified arguments
    	this.x_orig = x0;
    	this.y_orig = y0;
    	this.x_width = xwidth;
    	this.y_width = ywidth;
    	//
    	this.x_displ_scal = (xmax - xmin) / xwidth;
    	this.y_displ_scal = (ymax - ymin) / ywidth;
    	//
    	this.x_min_rel = xmin / this.x_displ_scal;
    	this.x_max_rel = xmax / this.x_displ_scal;
    	this.y_min_rel = ymin / this.y_displ_scal;
    	this.y_max_rel = ymax / this.y_displ_scal;

    	this.x_min = this.x_min_rel + this.x_orig;
    	this.x_max = this.x_max_rel + this.x_orig;
    	this.y_min = this.y_orig - this.y_min_rel;
    	this.y_max = this.y_orig - this.y_max_rel;
    	this.txpos = this.x_orig - this.tw;
    	this.typos = this.y_orig;
    }

}

// METHODS
	// DRAW GRID: draw major, minor lines and display values
	this.drawgrid = function(xmajor,xminor,ymajor,yminor){
		x_tick_major=xmajor/x_displ_scal;
		x_tick_minor=xminor/x_displ_scal;
		y_tick_major=ymajor/y_displ_scal;
		y_tick_minor=yminor/y_displ_scal;
		// draw major grid lines
		ctx.strokeStyle = '#999999';
		ctx.lineWidth = 1;
		ctx.beginPath() ;
		yy=y_max;
		do {
			ctx.moveTo(x_min,yy);
			ctx.lineTo(x_max,yy);
			yy+= y_tick_major;
		} while (yy <= y_min);
		xx=x_min;
		do {
			ctx.moveTo(xx,y_min);
			ctx.lineTo(xx,y_max);
			xx+= x_tick_major;
		} while (xx <= x_max);
		ctx.stroke();
		// draw minor grid lines
		ctx.strokeStyle = '#cccccc';
		ctx.lineWidth = 1;
		ctx.beginPath() ;
		yy=y_max;
		do {
			ctx.moveTo(x_min,yy);
			ctx.lineTo(x_max,yy);
			yy+= y_tick_minor;
		} while (yy <= y_min);
		xx=x_min;
		do {
			ctx.moveTo(xx,y_min);
			ctx.lineTo(xx,y_max);
			xx+= x_tick_minor;
		} while (xx <= x_max);
		ctx.stroke();
		//display values
		ctx.font = "10pt Arial";
		ctx.fillStyle = '#000000';
		ctx.textAlign = "right";
		ctx.textBaseline = "top";
		yy=y_max;
		do {
			y_displ=(y_orig - yy) * y_displ_scal;
			ctx.fillText(y_displ,txpos + 5,yy - th / 2);
			yy+= y_tick_major;
		} while (yy <= y_min);
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		xx=x_min;
		do {
			x_displ=(xx - x_orig) * x_displ_scal;
			ctx.fillText(x_displ,xx - tw + 10,typos + 5);
			xx+= x_tick_major;
		} while (xx <= x_max);
	};

	// DRAW AXES: draw axes and labels
	this.drawaxes = function (xlabel,ylabel){
		if(typeof(xlabel)==='undefined') xlabel = 'x';
		if(typeof(ylabel)==='undefined') ylabel = 'y';
		ctx.strokeStyle = '#000000';
		ctx.lineWidth = 2;
		ctx.beginPath() ;
		ctx.moveTo(x_min,y_orig);
		ctx.lineTo(x_max,y_orig);
		ctx.moveTo(x_orig,y_min);
		ctx.lineTo(x_orig,y_max);
		ctx.stroke();
		//axis labels
		ctx.font = "12pt Arial";
		ctx.fillStyle = '#000000';
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText(xlabel,x_max + 0.75 * tw,typos - th / 2);
		ctx.fillText(ylabel,txpos + tw / 2 +5,y_max - 1.5 * th);
	};

	// PLOT DATA: plot data
	this.plot = function (xArr, yArr, pColor, pDots, pLine){
		// the last three arguments have default values
		if(typeof(pColor)==='undefined') pColor = '#0000ff';
		if(typeof(pDots)==='undefined') pDots = true;
		if(typeof(pLine)==='undefined') pLine = true;
		var xpos=x_orig+xArr[0]/x_displ_scal;
		var ypos=y_orig-yArr[0]/y_displ_scal;
		ctx.strokeStyle = pColor;
		ctx.lineWidth = 1;
		ctx.beginPath() ;
		ctx.moveTo(xpos,ypos);
		ctx.arc(xpos,ypos,1,0,2*Math.PI,true);
		for (var i=1; i<xArr.length; i++){
			xpos=x_orig+xArr[i]/x_displ_scal;
			ypos=y_orig-yArr[i]/y_displ_scal;
			if (pLine){
				ctx.lineTo(xpos,ypos);
			}else{
				ctx.moveTo(xpos,ypos);
			}
			if (pDots){
				ctx.arc(xpos,ypos,1,0,2*Math.PI,true);
			}
		}
		ctx.stroke();
	};

}
