export interface Response<T = object> {
  code: string
  data: T
  message: string
}
