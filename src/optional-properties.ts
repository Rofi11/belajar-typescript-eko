// Optioanl Properties
//contoh nya di buat mirip dengan type alias
export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  description?: string; // contoh bentuk optional properties (sekarang bisa optional untuk di isi atau tidak)
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string; // contoh bentuk optional properties (sekarang bisa optional untuk di isi atau tidak)
};
