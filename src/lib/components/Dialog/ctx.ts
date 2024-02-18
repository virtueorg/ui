import { createDialog, type CreateDialogProps, type Dialog } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Dialog"

const set = (props: CreateDialogProps) => {
  const dialog = createDialog(props)

  setContext(NAME, dialog)

  return dialog
}

const get = () => {
  const dialog: Dialog = getContext(NAME)

  return dialog
}

const ctx = {
  set,
  get,
}

export default ctx
