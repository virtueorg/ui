import { createRadioGroup, type CreateRadioGroupProps, type RadioGroup } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "radio-group"
const ITEM_NAME = "radio-item"

const create = (props: CreateRadioGroupProps) => {
  const radioGroup = createRadioGroup(props)

  setContext(NAME, radioGroup)

  return radioGroup
}

const get = () => {
  const radioGroup: RadioGroup = getContext(NAME)

  return radioGroup
}

const createItem = (value: string) => {
  const radioGroup: ReturnType<typeof createRadioGroup> = getContext(NAME)

  setContext(ITEM_NAME, {
    value,
    ...radioGroup,
  })

  return {
    value,
    ...radioGroup,
  }
}

const getItem = () => {
  const radioItem: ReturnType<typeof createItem> = getContext(ITEM_NAME)

  return radioItem
}

const ctx = {
  create,
  get,
  createItem,
  getItem,
}

export default ctx
