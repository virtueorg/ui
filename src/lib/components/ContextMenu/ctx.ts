import {
  createContextMenu,
  type ContextMenu,
  type CreateContextMenuCheckboxItemProps,
  type CreateContextMenuProps,
  type CreateContextMenuRadioGroupProps,
  type CreateContextSubmenuProps,
} from "@melt-ui/svelte"
import { nanoid } from "nanoid"
import { getContext, setContext } from "svelte"

const NAME = "contextmenu"
const CHECKBOX_ITEM_NAME = "contextmenu-checkbox-item"
const GROUP_NAME = "contextmenu-group"
const RADIO_GROUP_NAME = "contextmenu-radio-group"
const RADIO_ITEM_NAME = "contextmenu-radio-item"
const SUB_NAME = "contextmenu-sub"

const create = (props: CreateContextMenuProps) => {
  const contextMenu = createContextMenu(props)

  setContext(NAME, contextMenu)

  return contextMenu
}

const get = () => {
  const contextMenu: ContextMenu = getContext(NAME)

  return contextMenu
}

const createCheckboxItem = (props: CreateContextMenuCheckboxItemProps) => {
  const { builders } = get()
  const { createCheckboxItem } = builders

  const checkboxItem = createCheckboxItem(props)

  setContext(CHECKBOX_ITEM_NAME, checkboxItem)

  return checkboxItem
}

const getCheckboxItem = () => {
  const checkboxItem: ReturnType<typeof createCheckboxItem> = getContext(CHECKBOX_ITEM_NAME)

  return checkboxItem
}

const createGroup = () => {
  const { elements } = get()
  const { group } = elements
  const id = nanoid()

  setContext(GROUP_NAME, id)

  return {
    id,
    group,
  }
}

const getGroupLabel = () => {
  const id: string = getContext(GROUP_NAME) || nanoid()

  const { elements } = get()
  const { groupLabel } = elements

  return {
    id,
    groupLabel,
  }
}

const createRadioGroup = (props: CreateContextMenuRadioGroupProps) => {
  const { builders } = get()
  const { createMenuRadioGroup } = builders
  const radioGroup = createMenuRadioGroup(props)

  setContext(RADIO_GROUP_NAME, radioGroup)

  return radioGroup
}

const createRadioItem = (value: string) => {
  const radioGroup: ReturnType<typeof createRadioGroup> = getContext(RADIO_GROUP_NAME)

  setContext(RADIO_ITEM_NAME, {
    value,
    ...radioGroup,
  })

  return {
    value,
    ...radioGroup,
  }
}

const getRadioItem = () => {
  const radioItem: ReturnType<typeof createRadioItem> = getContext(RADIO_ITEM_NAME)

  return radioItem
}

const createSub = (props: CreateContextSubmenuProps) => {
  const { builders } = get()
  const { createSubmenu } = builders
  const sub = createSubmenu(props)

  setContext(SUB_NAME, sub)

  return sub
}

const getSub = () => {
  const sub: ReturnType<typeof createSub> = getContext(SUB_NAME)

  return sub
}

const ctx = {
  create,
  get,
  createCheckboxItem,
  getCheckboxItem,
  createGroup,
  getGroupLabel,
  createRadioGroup,
  createRadioItem,
  getRadioItem,
  createSub,
  getSub,
}

export default ctx
