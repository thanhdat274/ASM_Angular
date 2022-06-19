export type Auth = {
  email: string,
  password: number
}
export type LoginResponse = {
  accessToken: string
  password: number
}

export type UserType = {
  _id: number,
  name: string,
  email: string,
  password: string,
  phone: number,
  address: string,
  img: string,
  role: number
}
