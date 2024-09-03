export interface AddFunction {
  (value1: number, value2: number): number;
}

const add: AddFunction = (value1: number, value2: number): number => {
  return value1 + value2;
};

console.log(add(1, 2));
