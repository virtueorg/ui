import { createProgress, type CreateProgressProps } from "@melt-ui/svelte"
import { setContext } from "svelte"

const NAME = "progress"

const create = (props: CreateProgressProps) => {
  const progress = createProgress(props)

  setContext(NAME, progress)

  return progress
}

const ctx = {
  create,
}

export default ctx
