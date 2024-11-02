describe("Visibilty", () => {
  // parent class
  class Counter {
    // mmebuat vibility private
    private counter: number = 0;

    // mmebuat visibility protected (yg bisa di inheritance)
    protected counter2: number = 0;

    // membuat visibility public (default nya)
    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  // child class
  class DoubleCounter extends Counter {
    public increment2(): void {
      this.counter2 += 2;
    }

    public getCounter2(): number {
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
