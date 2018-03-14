import Vector from './vector';
import {
    GRAVITATIONAL_CONSTANT
} from './constants';

export default class Forces {

    static zero() {
        return new Vector(0, 0);
    }

    static constantGravity(mass, g) {
        return new Vector(0, mass * g);
    }

    static gravity(m1, m2, r) {
        return r.clone().scale(-GRAVITATIONAL_CONSTANT * m1 * m2 /(r.lengthSquared() * r.length()))
    }

    static drag(k, velocity) {
        let force;
        const magnitude = velocity.length();

        if (magnitude > 0) {
            force = velocity.clone().scale(-k);
        } else {
            force = new Vector(0, 0);
        }

        return force;
    }

    static add(forces) {
        let sum = new Vector(0, 0);

        for (let i=0; i<forces.length; i++) {
            sum.incrementBy(forces[i]);
        }

        return sum;
    }
}