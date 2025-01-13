export type Paging = {
  size: number;
  total_page: number;
  current_page: number;
};

// dibuat generic karena tipe data nya berubah rubah
export type Pageable<T> = {
  data: Array<T>;
  paging: Paging;
};
