import { 
    TIME_FRACTION,
    MINIMUM_TIME_DIFFERENCE
 } from './constants';

class Core {
    constructor() {
        this.t0 = 0;
        this.t = 0;
        this.dt = 0;
    }

    init() {
        this.t0 = new Date().getTime();
    }

    update() {
        var t1 = new Date().getTime();
        this.dt = TIME_FRACTION * ( t1 - this.t0);
        this.t0 = t1;

        if (this.dt > MINIMUM_TIME_DIFFERENCE) {
            this.dt = 0;
        }
        this.t += this.dt;
    }
}


export default new Core();