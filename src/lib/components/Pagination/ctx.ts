import { createPagination, type CreatePaginationProps, type Pagination } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = ""

const set = (props: CreatePaginationProps) => {
  const pagination = createPagination(props)

  setContext(NAME, pagination)

  return pagination
}

const get = () => {
  const pagination: Pagination = getContext(NAME)

  return pagination
}

const ctx = {
  set,
  get,
}

export default ctx
