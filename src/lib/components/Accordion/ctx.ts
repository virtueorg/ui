import {
  createAccordion,
  type Accordion,
  type AccordionItemProps,
  type CreateAccordionProps,
} from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";

const NAME = "accordion";
const ITEM_NAME = "accordion-item";

const create = (props: CreateAccordionProps) => {
  const accordion = createAccordion(props);

  setContext(NAME, accordion);

  return accordion;
};

const get = () => {
  const accordion: Accordion = getContext(NAME);

  return accordion;
};

const setItem = (props: Exclude<AccordionItemProps, string>) => {
  setContext(ITEM_NAME, props);

  const accordion = get();
  const { elements } = accordion;
  const { item } = elements;

  return { item, props };
};

const getItem = () => {
  const item: Exclude<AccordionItemProps, string> = getContext(ITEM_NAME);

  return item;
};

const ctx = {
  create,
  get,
  setItem,
  getItem,
};

export default ctx;
