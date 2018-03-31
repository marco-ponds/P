import { Vector } from '../math';
import Particle from './particle';

class Wheel extends Particle {

    constructor({ mass, charge, color = '#333333', innerRadius = 10, outerRadius = 15, numSpokes = 12 }) {
        super(mass, charge);

        this.color = color;
        this.radius = {
            inner: innerRadius,
            outer: outerRadius
        };

        this.nums = numSpokes;
    }

    draw(context) {
        const { x, y } = this.position;
        const { inner, outer } = this.radius;

        context.save();
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(x, y, outer, 0, 2 * Math.PI, true);
        context.closePath();
        context.fill();
        context.fillStyle = '#ffffff';
        context.beginPath();
        context.arc(x, y, inner, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
        context.strokeStyle = this.color;
        context.lineWidth = 4;
        context.beginPath();

        for (var n = 0; n < this.nums; n++) {
            context.moveTo(x, y);
            context.lineTo(
                x + inner * Math.cos(2 * Math.PI * n / this.nums),
                y + inner * Math.sin(2 * Math.PI * n / this.nums)
            );
        }
        context.closePath();
        context.stroke();
        context.restore();
    }
}

export default Wheel;
