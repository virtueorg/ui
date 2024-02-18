import { createTooltip, type CreateTooltipProps, type Tooltip } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Tooltip"

const set = (props: CreateTooltipProps) => {
  const tooltip = createTooltip(props)

  setContext(NAME, tooltip)

  return tooltip
}

const get = () => {
  const tooltip: Tooltip = getContext(NAME)

  return tooltip
}

const ctx = {
  set,
  get,
}

export default ctx
