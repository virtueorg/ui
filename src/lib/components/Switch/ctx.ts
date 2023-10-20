import { createSwitch, type CreateSwitchProps, type Switch } from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";

const NAME = "switch";

const create = (props: CreateSwitchProps) => {
  const switchComponent = createSwitch(props);

  setContext(NAME, switchComponent);

  return switchComponent;
};

const get = () => {
  const switchComponent: Switch = getContext(NAME);

  return switchComponent;
};

const ctx = {
  create,
  get,
};

export default ctx;
