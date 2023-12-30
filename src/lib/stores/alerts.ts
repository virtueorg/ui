import { ALERT_TIMEOUT } from "$lib"
import type { IAlert } from "$lib/types"
import { nanoid } from "nanoid"
import { writable, type Writable } from "svelte/store"

const alerts: Writable<IAlert[]> = writable([])

const add = (alert: IAlert) => {
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

const remove = (id: IAlert["id"]) => {
  alerts.update($alerts => {
    return $alerts.filter(alert => alert.id !== id)
  })
}

export default {
  ...alerts,
  add,
  remove,
}
