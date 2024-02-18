import {
  createContextMenu,
  type ContextMenu,
  type ContextMenuCheckboxItem,
  type ContextMenuRadioGroup,
  type ContextMenuRadioItemProps,
  type ContextMenuSubmenu,
  type CreateAccordionProps,
  type CreateContextMenuCheckboxItemProps,
  type CreateContextMenuRadioGroupProps,
  type CreateContextSubmenuProps,
} from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "ContextMenu"
const CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem"
const RADIO_GROUP_NAME = "ContextMenuRadioGroup"
const RADIO_ITEM_NAME = "ContextMenuRadioItem"
const SUB_NAME = "ContextMenuSub"

const set = (props: CreateAccordionProps<boolean>) => {
  const contextMenu = createContextMenu(props)

  setContext(NAME, contextMenu)

  return contextMenu
}

const get = () => {
  const contextMenu: ContextMenu = getContext(NAME)

  return contextMenu
}

const setCheckboxItem = (props: CreateContextMenuCheckboxItemProps) => {
  const { builders } = get()
  const { createCheckboxItem } = builders
  const checkboxItem = createCheckboxItem(props)

  setContext(CHECKBOX_ITEM_NAME, checkboxItem)

  return checkboxItem
}

const getCheckboxItem = () => {
  const checkboxItem: ContextMenuCheckboxItem = getContext(CHECKBOX_ITEM_NAME)

  return checkboxItem
}

const setRadioGroup = (props: CreateContextMenuRadioGroupProps) => {
  const { builders } = get()
  const { createMenuRadioGroup } = builders
  const radioGroup = createMenuRadioGroup(props)

  setContext(RADIO_GROUP_NAME, radioGroup)

  return radioGroup
}

const getRadioGroup = () => {
  const radioGroup: ContextMenuRadioGroup = getContext(RADIO_GROUP_NAME)

  return radioGroup
}

const setRadioItem = (props: ContextMenuRadioItemProps) => {
  const item = props

  setContext(RADIO_ITEM_NAME, item)

  return item
}

const getRadioItem = () => {
  const item: ContextMenuRadioItemProps = getContext(RADIO_ITEM_NAME)

  return item
}

const setSub = (props: CreateContextSubmenuProps) => {
  const { builders } = get()
  const { createSubmenu } = builders

  const sub = createSubmenu(props)

  setContext(SUB_NAME, sub)

  return sub
}

const getSub = () => {
  const sub: ContextMenuSubmenu = getContext(SUB_NAME)

  return sub
}

const ctx = {
  set,
  get,
  setCheckboxItem,
  getCheckboxItem,
  setRadioGroup,
  getRadioGroup,
  setRadioItem,
  getRadioItem,
  setSub,
  getSub,
}

export default ctx
