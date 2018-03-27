import Particle from './particle';

class Ball extends Particle {

    constructor({ radius, color, mass, charge, gradient} = {}) {

       super({mass, charge});

       this.radius = radius === undefined ? 20 : radius;
       this.color = color === undefined ? '#0000ff' : color;
       this.gradient = gradient === undefined ? false : gradient;
    }

    draw(context) {

        const {x, y} = this.position;

        /*
        if (this.gradient){
           let grad = context.createRadialGradient(x, y, 0, x, y, this.radius);
           grad.addColorStop(0, '#ffffff');
           grad.addColorStop(1, this.color);
           context.fillStyle = grad;
        } else{
           context.strokeStyle = this.color;
       }*/
        context.strokeStyle = this.color;
        context.beginPath();
        context.arc(x, y, this.radius, 0, 2*Math.PI, true);
        context.closePath();
    }
}

export default Ball;
