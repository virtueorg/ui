import { createLabel } from "@melt-ui/svelte";
import { setContext } from "svelte";

const NAME = "label";

const create = () => {
  const label = createLabel();

  setContext(NAME, label);

  return label;
};

const ctx = {
  create,
};

export default ctx;
