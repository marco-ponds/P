import Particle from './particle';

class Wall extends Particle {

    constructor(p1, p2) {
        super({mass: 1, charge: 1});
        this.p1 = p1;
        this.p2 = p2;
        this.side = 1;
    }

    get direction() {
        return this.p2.subtract(this.p1);
    }

    get normal() {
        return this.dir.perp(1);
    }

    draw(context) {
        context.save();
        context.strokeStyle = '#000000';
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(this.p1.x, this.p1.y);
        context.lineTo(this.p2.x, this.p2.y);
        context.closePath();
        context.stroke();
        context.restore();
    }
}

export default Wall;
