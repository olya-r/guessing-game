class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return (this.candidate = Math.round((this.minValue + this.maxValue) / 2));
    }

    lower() {
        //this.maxValue = this.candidate - 1;
        this.maxValue = this.candidate;
    }

    greater() {
        //this.minValue = this.candidate + 1;
        this.minValue = this.candidate;
    }
}

module.exports = GuessingGame;
