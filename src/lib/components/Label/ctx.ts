import { createLabel, type Label } from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";

const NAME = "label";

const create = () => {
  const label = createLabel();

  setContext(NAME, label);

  return label;
};

const get = () => {
  const label: Label = getContext(NAME);

  return label;
};

const ctx = {
  create,
  get,
};

export default ctx;
