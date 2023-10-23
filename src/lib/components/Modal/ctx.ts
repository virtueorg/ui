import { createDialog, type CreateDialogProps, type Dialog } from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";

const NAME = "modal";

const create = (props: CreateDialogProps) => {
  const modal = createDialog(props);

  setContext(NAME, modal);

  return modal;
};

const get = () => {
  const modal: Dialog = getContext(NAME);

  return modal;
};

const ctx = {
  create,
  get,
};

export default ctx;
