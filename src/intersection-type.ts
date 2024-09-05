export interface HasName {
  name: string;
}

export interface HasId {
  id: string;
}

// contoh intersection typs (menggabungkan 2 interface menjadi satu dengan type)
export type Domain = HasId & HasName;
