import type { Alert } from "$lib/types.js"
import { getContext, setContext } from "svelte"

const NAME = "Alert"

const set = (props: Alert) => {
  const alert = props

  setContext(NAME, alert)

  return alert
}

const get = () => {
  const alert: Alert = getContext(NAME)

  return alert
}

const ctx = {
  set,
  get,
}

export default ctx
