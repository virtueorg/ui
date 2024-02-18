import {
  createDropdownMenu,
  type CreateAccordionProps,
  type CreateDropdownMenuCheckboxItemProps,
  type CreateDropdownMenuRadioGroupProps,
  type CreateDropdownSubmenuProps,
  type DropdownMenu,
  type DropdownMenuCheckboxItem,
  type DropdownMenuRadioGroup,
  type DropdownMenuRadioItemProps,
  type DropdownMenuSubmenu,
} from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "DropdownMenu"
const CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem"
const RADIO_GROUP_NAME = "DropdownMenuRadioGroup"
const RADIO_ITEM_NAME = "DropdownMenuRadioItem"
const SUB_NAME = "DropdownMenuSub"

const set = (props: CreateAccordionProps<boolean>) => {
  const dropdownMenu = createDropdownMenu(props)

  setContext(NAME, dropdownMenu)

  return dropdownMenu
}

const get = () => {
  const dropdownMenu: DropdownMenu = getContext(NAME)

  return dropdownMenu
}

const setCheckboxItem = (props: CreateDropdownMenuCheckboxItemProps) => {
  const { builders } = get()
  const { createCheckboxItem } = builders
  const checkboxItem = createCheckboxItem(props)

  setContext(CHECKBOX_ITEM_NAME, checkboxItem)

  return checkboxItem
}

const getCheckboxItem = () => {
  const checkboxItem: DropdownMenuCheckboxItem = getContext(CHECKBOX_ITEM_NAME)

  return checkboxItem
}

const setRadioGroup = (props: CreateDropdownMenuRadioGroupProps) => {
  const { builders } = get()
  const { createMenuRadioGroup } = builders
  const radioGroup = createMenuRadioGroup(props)

  setContext(RADIO_GROUP_NAME, radioGroup)

  return radioGroup
}

const getRadioGroup = () => {
  const radioGroup: DropdownMenuRadioGroup = getContext(RADIO_GROUP_NAME)

  return radioGroup
}

const setRadioItem = (props: DropdownMenuRadioItemProps) => {
  const item = props

  setContext(RADIO_ITEM_NAME, item)

  return item
}

const getRadioItem = () => {
  const item: DropdownMenuRadioItemProps = getContext(RADIO_ITEM_NAME)

  return item
}

const setSub = (props: CreateDropdownSubmenuProps) => {
  const { builders } = get()
  const { createSubmenu } = builders

  const sub = createSubmenu(props)

  setContext(SUB_NAME, sub)

  return sub
}

const getSub = () => {
  const sub: DropdownMenuSubmenu = getContext(SUB_NAME)

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
