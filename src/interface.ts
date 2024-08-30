// contoh interface
export interface Seller {
  id: number;
  name: string;
  address?: string;
  // readonly contih
  readonly nib: string;
  readonly npwp?: string; // contoh yg optional
}
