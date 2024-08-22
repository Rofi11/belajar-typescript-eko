// structure type alias
// Type alias unutk Union Type (tinggal di masukan ke dalam structure object type nya)
export type ID = string | number;

// membuat object type
export type Category = {
  id: ID;
  name: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
};
