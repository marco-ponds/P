import Particle from './particle';

export default class Box extends Particle {

    constructor({width = 20, height = 20, color = '#333333', mass = 1, charge = 1}) {
        super(mass, charge);
        this.width = width;
    	this.height = height;
    	this.color = color;
    	this.mass = mass;
    }

    draw(context) {
        const { x, y } = this.position;
		context.strokeStyle = this.color;
        context.fillStyle = '#ffffff';

		context.rect(x, y, this.width, this.height);
        context.stroke();
	}
}
