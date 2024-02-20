import { createSeparator, type CreateSeparatorProps, type Separator } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Separator"

const set = (props: CreateSeparatorProps) => {
  const separator = createSeparator(props)

  setContext(NAME, separator)

  return separator
}

const get = () => {
  const separator: Separator = getContext(NAME)

  return separator
}

const ctx = {
  set,
  get,
}

export default ctx
