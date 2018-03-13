import {
    TIME_FRACTION,
    MINIMUM_TIME_DIFFERENCE
 } from './constants';

class Core {
    constructor() {
        this.time = {
            initial: 0,
            elapsed: 0,
            dt: 0
        };
    }

    init() {
        this.time.initial  = new Date().getTime();
    }

    update() {
        var t1 = new Date().getTime();
        this.time.dt = TIME_FRACTION * ( t1 - this.time.initial);
        this.time.initial = t1;
        if (this.time.dt > MINIMUM_TIME_DIFFERENCE) {
            this.time.dt = 0;
        }
        this.time.elapsed += this.time.dt;
    }
}


export default new Core();
