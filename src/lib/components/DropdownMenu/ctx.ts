import {
  createDropdownMenu,
  type CreateDropdownMenuCheckboxItemProps,
  type CreateDropdownMenuProps,
  type CreateDropdownMenuRadioGroupProps,
  type CreateDropdownSubmenuProps,
  type DropdownMenu,
} from "@melt-ui/svelte"
import { nanoid } from "nanoid"
import { getContext, setContext } from "svelte"

const NAME = "dropdownmenu"
const CHECKBOX_ITEM_NAME = "dropdownmenu-checkbox-item"
const GROUP_NAME = "dropdownmenu-group"
const RADIO_GROUP_NAME = "dropdownmenu-radio-group"
const RADIO_ITEM_NAME = "dropdownmenu-radio-item"
const SUB_NAME = "dropdownmenu-sub"

const create = (props: CreateDropdownMenuProps) => {
  const dropdownMenu = createDropdownMenu(props)

  setContext(NAME, dropdownMenu)

  return dropdownMenu
}

const get = () => {
  const dropdownMenu: DropdownMenu = getContext(NAME)

  return dropdownMenu
}

const createCheckboxItem = (props: CreateDropdownMenuCheckboxItemProps) => {
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

const createRadioGroup = (props: CreateDropdownMenuRadioGroupProps) => {
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

const createSub = (props: CreateDropdownSubmenuProps) => {
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
