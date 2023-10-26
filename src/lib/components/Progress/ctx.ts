import { createProgress, type CreateProgressProps, type Progress } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "progress"

const create = (props: CreateProgressProps) => {
  const progress = createProgress(props)

  setContext(NAME, progress)

  return progress
}

const get = () => {
  const progress: Progress = getContext(NAME)

  return progress
}

const ctx = {
  create,
  get,
}

export default ctx
