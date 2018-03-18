import Vector from './vector';
import {
    G,
    AIR_DRAG,
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

    static upthrust(rho, volume) {
        return new Vector(0, -rho * volume * G);
    }

    static get DRAG_TYPES() {
        return {
            SPHERE: 1
        };
    }

    static linearDrag(object) {
        const k = 6 * Math.PI * AIR_DRAG * object.radius;
        let force,
            velMag = object.velocity.length();

        if (velMag > 0) {
            force = object.velocity.clone().scale(-k);
        }else {
            force = new Vector(0,0);
        }

        return force;
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

        for (let i = 0; i < forces.length; i++) {
            sum.incrementBy(forces[i]);
        }

        return sum;
    }
}
