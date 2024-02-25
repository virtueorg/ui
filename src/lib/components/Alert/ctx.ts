import type { AlertType } from "$lib/index.js"
import { getContext, setContext } from "svelte"

const NAME = "Alert"

const set = (props: AlertType) => {
  const alert = props

  setContext(NAME, alert)

  return alert
}

const get = () => {
  const alert: AlertType = getContext(NAME)

  return alert
}

const ctx = {
  set,
  get,
}

export default ctx
