import { createAccordion, type Accordion, type AccordionItemProps, type CreateAccordionProps } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Accordion"
const ITEM_NAME = "AccordionItem"

const set = (props: CreateAccordionProps<boolean>) => {
  const accordion = createAccordion(props)

  setContext(NAME, accordion)

  return accordion
}

const get = () => {
  const accordion: Accordion = getContext(NAME)

  return accordion
}

const setItem = (props: Exclude<AccordionItemProps, string>) => {
  const item = props

  setContext(ITEM_NAME, item)

  return item
}

const getItem = () => {
  const item: Exclude<AccordionItemProps, string> = getContext(ITEM_NAME)

  return item
}

const ctx = {
  set,
  get,
  setItem,
  getItem,
}

export default ctx
