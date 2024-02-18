import { createLabel, type Label } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Label"

const set = () => {
  const label = createLabel()

  setContext(NAME, label)

  return label
}

const get = () => {
  const label: Label = getContext(NAME)

  return label
}

const ctx = {
  set,
  get,
}

export default ctx
