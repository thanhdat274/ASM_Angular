export type Product = {
  _id: number,
  name: string,
  price: number,
  sale_price: number,
  quantity: number,
  short_desc: string,
  desc: string,
  img: string,
  categoryId: number
}
export type ProductCart = {
  _id: number,
  name: string,
  price: number,
  sale_price: number,
  quantity: number,
  short_desc: string,
  desc: string,
  img: string,
  categoryId: number
  value: number
};
