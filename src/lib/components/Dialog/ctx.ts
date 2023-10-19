import { createDialog, type CreateDialogProps, type Dialog } from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";

const NAME = "dialog";

const create = (props: CreateDialogProps) => {
  const dialog = createDialog(props);

  setContext(NAME, dialog);

  return dialog;
};

const get = () => {
  const dialog: Dialog = getContext(NAME);

  return dialog;
};

const ctx = {
  create,
  get,
};

export default ctx;
