import Particle from './particle';

class Ball extends Particle {

    constructor({ radius, color, mass, charge, gradient} = {}) {

       super({mass, charge});

       this.radius = radius === undefined ? 20 : radius;
       this.color = color === undefined ? '#333333' : color;
       this.gradient = gradient === undefined ? false : gradient;
    }

    draw(context) {
        const {x, y} = this.position;
        context.strokeStyle = this.color;
        context.fillStyle = '#ffffff';
        context.beginPath();
        context.arc(x, y, this.radius, 0, 2*Math.PI, true);
        context.closePath();
        context.stroke();
        context.fill();
    }
}

export default Ball;
