import { createSwitch, type CreateSwitchProps, type Switch } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "toggle"

const create = (props: CreateSwitchProps) => {
  const toggle = createSwitch(props)

  setContext(NAME, toggle)

  return toggle
}

const get = () => {
  const toggle: Switch = getContext(NAME)

  return toggle
}

const ctx = {
  create,
  get,
}

export default ctx
