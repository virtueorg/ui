import { ALERT_TIMEOUT } from "$lib"
import type { IAlert } from "$lib/types"
import { nanoid } from "nanoid"
import { writable, type Writable } from "svelte/store"

export const alerts: Writable<IAlert[]> = writable([])

export const addAlert = (alert: IAlert) => {
  if (!alert.id) {
    alert.id = nanoid()
  }

  alerts.update($alerts => {
    return [...$alerts, alert]
  })

  setTimeout(() => {
    removeAlert(alert.id)
  }, ALERT_TIMEOUT)
}

export const removeAlert = (id: IAlert["id"]) => {
  alerts.update($alerts => {
    return $alerts.filter(alert => alert.id !== id)
  })
}
