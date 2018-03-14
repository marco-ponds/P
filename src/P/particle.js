import Vector from './vector';

class Particle {
    
    constructor({ mass, charge } = {}) {
        this.mass = mass === undefined ? 1 : mass;
        this.charge = charge === undefined ? 0 : charge;
        this._position = new Vector(0, 0);
        this._velocity = new Vector(0, 0);
        this._acceleration = new Vector(0, 0);
    }
    
    set position(pos) {
        if (pos) {
            this._position.set(pos.x, pos.y);
        }
    }

    get position() {
        return this._position;
    }

    set acceleration(acc) {
        if (pos) {
            this._acceleration.set(acc.x, acc.y);
        }
    }

    get acceleration() {
        return this._acceleration;
    }
    
    set velocity(v) {
        if (v) {
            this._velocity.set(v.x, v.y);
        }
    }

    get velocity() {
        return this._velocity;
    }
    
    updatePosition(dt) {
        const scaled = this.velocity.clone().scale(dt);
        this.position = this.position.add(scaled);

        return this;
    }

    updateVelocity(acc, dt) {
        const scaled = acc.clone().scale(dt);
        this.velocity = this.velocity.add(scaled);

        return this;
    }
}

export default Particle;