export type GenericListResponse<T extends string, U> = {
  total: number
  skip: number
  limit: number
} & {
  [key in T]: U
}

