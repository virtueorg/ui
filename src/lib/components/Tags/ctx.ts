import {
  createTagsInput,
  type CreateTagsInputProps,
  type Tag,
  type TagsInput,
} from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "tags"
const ITEM_NAME = "tags-item"

const create = (props: CreateTagsInputProps) => {
  const tags = createTagsInput(props)

  setContext(NAME, tags)

  return tags
}

const get = () => {
  const tags: TagsInput = getContext(NAME)

  return tags
}

const createItem = (props: Tag) => {
  const tag = setContext(ITEM_NAME, props)

  return tag
}

const getItem = () => {
  const tag: Tag = getContext(ITEM_NAME)

  return tag
}

const ctx = {
  create,
  get,
  getItem,
  createItem,
}

export default ctx
