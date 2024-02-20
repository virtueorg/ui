import { createSelect, type CreateSelectProps, type Select, type SelectOptionProps } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Select"
const OPTION_NAME = "SelectOption"

const set = (props: CreateSelectProps<boolean>) => {
  const select = createSelect(props)

  setContext(NAME, select)

  return select
}

const get = () => {
  const select: Select = getContext(NAME)

  return select
}

const setOption = (props: SelectOptionProps) => {
  const option = props

  setContext(OPTION_NAME, option)

  return option
}

const getOption = () => {
  const option: SelectOptionProps = getContext(OPTION_NAME)

  return option
}

const ctx = {
  set,
  get,
  setOption,
  getOption,
}

export default ctx
