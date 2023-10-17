import { createDialog, type CreateDialogProps, type Dialog } from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";

const NAME = "alertdialog";

const create = (props: CreateDialogProps) => {
  const alertDialog = createDialog(props);

  setContext(NAME, alertDialog);

  return alertDialog;
};

const get = () => {
  const alertDialog: Dialog = getContext(NAME);

  return alertDialog;
};

const ctx = {
  create,
  get,
};

export default ctx;
