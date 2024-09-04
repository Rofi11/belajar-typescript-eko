// contoh interface
export interface Employee {
  id: string;
  name: string;
  division: string;
}

// contoh untuk mewarisi(extend) interface
export interface Manager extends Employee {
  //akan otomatis mewarisi interface employee
  numberOfEmployee: number;
}
