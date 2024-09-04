// function interface 1 (video 20)
export interface AddFunction {
  (value1: number, value2: number): number;
}

const add: AddFunction = (value1: number, value2: number): number => {
  return value1 + value2;
};

console.log(add(1, 2));

// function interface 2 (video 23)
export interface Person {
  name: string;
  sayHello(name: string): string;
}
