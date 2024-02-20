import { createTagsInput, type CreateTagsInputProps, type Tag, type TagsInput } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "TagsField"
const ITEM_NAME = "TagsFieldItem"

const set = (props: CreateTagsInputProps) => {
  const tagsField = createTagsInput(props)

  setContext(NAME, tagsField)

  return tagsField
}

const get = () => {
  const tagsField: TagsInput = getContext(NAME)

  return tagsField
}

const setItem = (props: Tag) => {
  const item = props

  setContext(ITEM_NAME, item)

  return item
}

const getItem = () => {
  const item: Tag = getContext(ITEM_NAME)

  return item
}

const ctx = {
  set,
  get,
  setItem,
  getItem,
}

export default ctx
