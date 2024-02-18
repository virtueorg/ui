import { ALERT_TIMEOUT } from "$lib/index.js"
import type { Alert } from "$lib/types.js"
import { nanoid } from "nanoid"
import { writable } from "svelte/store"

const alerts = writable<Alert[]>([])

const add = (alert: Alert) => {
  if (!alert.id) {
    alert.id = nanoid()
  }

  alerts.update($alerts => {
    return [...$alerts, alert]
  })

  setTimeout(() => {
    remove(alert.id)
  }, ALERT_TIMEOUT)
}

const remove = (id: Alert["id"]) => {
  alerts.update($alerts => {
    return $alerts.filter(alert => alert.id !== id)
  })
}

export default {
  ...alerts,
  add,
  remove,
}
