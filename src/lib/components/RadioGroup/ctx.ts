import {
  createRadioGroup,
  type CreateRadioGroupProps,
  type RadioGroup,
  type RadioGroupItemProps,
} from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "RadioGroup"
const ITEM_NAME = "RadioGroupItem"

const set = (props: CreateRadioGroupProps) => {
  const radioGroup = createRadioGroup(props)

  setContext(NAME, radioGroup)

  return radioGroup
}

const get = () => {
  const radioGroup: RadioGroup = getContext(NAME)

  return radioGroup
}

const setItem = (props: Exclude<RadioGroupItemProps, string>) => {
  const item = props

  setContext(ITEM_NAME, item)

  return item
}

const getItem = () => {
  const item: Exclude<RadioGroupItemProps, string> = getContext(ITEM_NAME)

  return item
}

const ctx = {
  set,
  get,
  setItem,
  getItem,
}

export default ctx
