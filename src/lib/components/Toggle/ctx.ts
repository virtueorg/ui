import { createSwitch, type CreateSwitchProps, type Switch } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Toggle"

const set = (props: CreateSwitchProps) => {
  const toggle = createSwitch(props)

  setContext(NAME, toggle)

  return toggle
}

const get = () => {
  const toggle: Switch = getContext(NAME)

  return toggle
}

const ctx = {
  set,
  get,
}

export default ctx
