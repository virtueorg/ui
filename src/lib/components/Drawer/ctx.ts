import { createDialog, type CreateDialogProps, type Dialog } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "drawer"

const create = (props: CreateDialogProps) => {
  const drawer = createDialog(props)

  setContext(NAME, drawer)

  return drawer
}

const get = () => {
  const drawer: Dialog = getContext(NAME)

  return drawer
}

const ctx = {
  create,
  get,
}

export default ctx
