import { createPagination, type CreatePaginationProps, type Pagination } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "pagination"

const create = (props: CreatePaginationProps) => {
  const pagination = createPagination(props)

  setContext(NAME, pagination)

  return pagination
}

const get = () => {
  const pagination: Pagination = getContext(NAME)

  return pagination
}

const ctx = {
  create,
  get,
}

export default ctx
