import { createCheckbox, type Checkbox, type CreateCheckboxProps } from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";

const NAME = "checkbox";

const create = (props: CreateCheckboxProps) => {
  const checkbox = createCheckbox(props);

  setContext(NAME, checkbox);

  return checkbox;
};

const get = () => {
  const checkbox: Checkbox = getContext(NAME);

  return checkbox;
};

const ctx = {
  create,
  get,
};

export default ctx;
