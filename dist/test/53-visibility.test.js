"use strict";
describe("Visibilty", () => {
    // parent class
    class Counter {
        constructor() {
            // mmebuat vibility private
            this.counter = 0;
            // mmebuat visibility protected (yg bisa di inheritance)
            this.counter2 = 0;
        }
        // membuat visibility public (default nya)
        increment() {
            this.counter++;
        }
        getCounter() {
            return this.counter;
        }
    }
    // child class
    class DoubleCounter extends Counter {
        increment2() {
            this.counter2 += 2;
        }
        getCounter2() {
            return this.counter2;
        }
    }
    it("should support private", () => {
        const counter = new Counter();
        // increment dari private di parent class
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });
    it("should support protected", () => {
        const counter = new DoubleCounter();
        // increment dari private di parent class
        counter.increment2();
        counter.increment2();
        counter.increment2();
        console.info(counter.getCounter2());
    });
});
