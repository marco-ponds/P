class Vector {

    static distance(v1, v2) {
         return (v1.subtract(v2)).length();
    }

    static angleBetween(v1,v2) {
         return Math.acos(v1.dotProduct(v2) / (v1.length()*v2.length()));
    }

    static vector({ mag, angle, clockwise = true}){
        const vec = new Vector(0,0);
        vec.x = mag * Math.cos(angle);
        vec.y = mag * Math.sin(angle);

        if (!clockwise){
          vec.y *= -1;
        }

        return vec;
    }

    static components(vector) {
        return {
            x: new Vector(vector.x, 0),
            y: new Vector(0, vector.y)
        }
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = !isNaN(x) && x;
        this.y = !isNaN(y) && y;

        return this;
    }

    lengthSquared() {
        return this.x*this.x + this.y*this.y;
    }

    length() {
        return Math.sqrt(this.lengthSquared());
    }

    clone() {
        return new Vector(this.x, this.y);
    }

    negate() {
        this.x = - this.x;
        this.y = - this.y;

        return this;
    }

    normalize() {
        var length = this.length();
        if (length > 0) {
            this.x /= length;
            this.y /= length;
        }
        return this.length();
    }

    add(vec) {
        // doesn't change the existing vector, returns sum of two vectors
        return new Vector(this.x + vec.x, this.y + vec.y);
    }

    incrementBy(vec) {
        this.x += vec.x;
        this.y += vec.y;

        return this;
    }

    subtract(vec) {
        // returns a new vector which is the difference between this and vec.
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    decrementBy(vec) {
        this.x -= vec.x;
        this.y -= vec.y;

        return this;
    }

    scale(k) {
        this.x *= k;
        this.y *= k;

        return this;
    }

    addScaled(vec, scale) {
        return this.add(vec.clone().scale(scale));
    }

    dotProduct(vec) {
        // also called scalar product
        return (this.x * vec.x) + (this.y * vec.y);
    }

    perp(coeff, anticlockwise = true){
        const length = this.length();
        let vec = new Vector(this.y, -this.x);
        if (length > 0) {
            if (anticlockwise) { // anticlockwise with respect to canvas coordinate system
                vec.scale(coeff / length);
            } else{
                vec.scale(-coeff / length);
            }
        } else{
            vec = new Vector(0,0);
        }
        return vec;
    }
}

export default Vector;
