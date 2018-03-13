import Vector from './vector';

export default class Forces {

    static zero() {
        return new Vector(0, 0);
    }

    static constantGravity(mass, g) {
        return new Vector(0, mass * g);
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