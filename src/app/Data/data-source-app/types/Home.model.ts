export interface HomeModel {
  err: number;
  msg: String,
  data: HomeData
}

export interface HomeData {
  items: [],
  hasMore: boolean,
  total: number,
}
