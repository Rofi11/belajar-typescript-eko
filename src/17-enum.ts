export enum CustomerType {
  PLATINUM = 2,
  REGULAR = 0,
  GOLD = 1,
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};

// cara menggunakan enum ada di enum.test.ts
