import { Vector } from '../math';
import {
    G,
    AIR_DRAG,
    GRAVITATIONAL_CONSTANT,
    COULOMB
} from '../constants';

export default class Forces {

    static zero() {
        return new Vector(0, 0);
    }

    static constantGravity(mass) {
        return new Vector(0, mass * G);
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

    static linearDrag(constant, velocity) {
        const k = 6 * Math.PI * constant * object.radius;
        let force,
            velMag = velocity.length();

        if (velMag > 0) {
            force = velocity.clone().scale(-k);
        }else {
            force = new Vector(0,0);
        }

        return force;
    }

    static drag(constant, velocity) {
        let force;

        //const k = 1/2 * rho * Area of object * Drag coeff;
        const magnitude = velocity.length();

        if (magnitude > 0) {
            force = velocity.clone().scale(- constant * magnitude);
        } else {
            force = new Vector(0, 0);
        }

        return force;
    }

    static lift(constant, velocity) {
        let force;

        const magnitude = velocity.length();

        if (magnitude > 0) {
          force = velocity.perp(constant * magnitude);
        } else {
          force = new Vector(0, 0);
        }

        return force;
    }

    static wind(constant, velocity, wind, turbolence) {

        let _wind = wind;
        if (turbolence) {
            _wind = new Vector(20 + (Math.random()-0.5)*1000,(Math.random()-0.5)*1000);
        }

        const relwind = _wind.subtract(velocity);

        return Forces.drag(-constant, relwind);
    }

    static spring(constant, vector) {
        // restoring force of a spring
        return vector.clone().scale(-constant);
    }

    static damping(constant, velocity) {
        const magnitude = velocity.length();

        if (magnitude > 0) {
            return velocity.clone().scale(-constant);
        } else {
            return new Vector(0, 0);
        }
    }

    static centripetal(distance, obj) {
        const unit = distance.unit().clone();
        const mass = obj.mass;
        const velMagnitude = obj.velocity.length();

        return unit.scale(-mass * velMagnitude * velMagnitude/distance.length());
    }

    static maxFriction(constant, distance, { mass = 1}) {
        const unit = distance.unit().clone();

        return unit.scale(-constant * mass * G);
    }

    static tension(distance, length, gravity, object) {
        const unit = distance.unit().clone();
        const magnitude = object.velocity.lengthSquared();
        const { mass, velocity } = object;

        return unit.scale(-(gravity.projection(distance) + mass * velocity.lengthSquared() / lengthP));
    }

    static electric(q1, q2, distance) {
        // same charge repels, diff charge attracts
        return distance.clone().scale(COULOMB * q1 * q2 / (distance.lengthSquared() * distance.length()));
    }

    static lorentz(E, B, object) {
        // Lorentz = qE + vB ( we can assume B is pointing out of the screen);
        const { charge, velocity } = object;
        return E.clone().scale(charge).add(velocity.perp(charge * B * velocity.length()));
    }

    static central(k, n, distance) {
        // k > 0 repulsive, k < 0 attractive
        // n > 0 increase with distance, n < 0 decrease
        return distance.clone().scale(k * Math.pow(distance.length(), n-1));
    }

    static field(k, F) {
        // force produced by a force field on a particle
        // GRAVITY      particle.force = P.Forces.forceField(m, G); G = P.Vector(0, 9.8);
        // ELECTRIC     particle.force = P.Forces.forceFIeld(q, E)
        return F.clone().scale(k);
    }

    static add(forces) {
        let sum = new Vector(0, 0);

        for (let i = 0; i < forces.length; i++) {
            sum.incrementBy(forces[i]);
        }

        return sum;
    }
}
